// Setup the port

const port = process.env.PORT || 3000;

// Set up server
const http = require('http')
// Get the app

const app = require('./app');

const server = http.createServer(app);
server.listen(port);

console.log('rest list RESTful API server started on: ' + port);
