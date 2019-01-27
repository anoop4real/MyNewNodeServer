const express = require('express');
const router = express.Router();

const User = require('../models/userListModel');


router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Get call success'
  });
});

router.post('/', (req, res, next) => {

  const user = new User(req.body);
  user.save()
    .then(result => {
      console.log(result);
    })
    .catch(err => console.log(err));
  res.status(201).json({
    message: 'Post call success',
    userCreated: user
  });
});

// Fetch a user by passing user Id.
router.get('/:userId', (req, res, next) => {
  const userId = req.params.userId;
  User.find({
    userId: userId
  }, function(err, user) {
    if (err)
      res.send(err);
    res.status(200).json(user);
  });
  // User.findById(req.params.userId, function(err, user) {
  //   if (err)
  //     res.send(err);
  //   res.status(200).json(user);
  // });

});
router.put('/:userId', (req, res, next) => {
  const userId = req.params.userId;
  res.status(200).json({
    message: 'Update finding id',
    id: userId
  });
});

router.delete('/:userId', (req, res, next) => {
  const userId = req.params.userId;
  res.status(200).json({
    message: 'Delete finding id',
    id: userId
  });
});

module.exports = router;