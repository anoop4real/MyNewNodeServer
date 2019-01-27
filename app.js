// setup express

const express = require('express');
const logger = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoute = require('./api/routes/usersRoute');
const ordersRoute = require('./api/routes/ordersRoute');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/usersDb');
// app.use((req, res, next)=>{
//    res.status(200).json({
//      message: 'It works'
//    })
// })
// Set body parser to parse urlencoded as well as json data
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(logger('dev'));

// Allow CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
})

app.use('/users', userRoute);
app.use('/orders', ordersRoute);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
})

app.use((error, req, res, next) => {
  res.status(error.status || 500);

  res.json({
    error: {
      message: error.message
    }
  })
})

module.exports = app;