const express = require('express');
const router = express.Router();


router.get('/',(req, res, next) =>{
  res.status(200).json({
    message: 'Get call success'
  });
});

router.post('/',(req, res, next) =>{
  // On using body parser, your request will have a property body.
  const order = {
    orderTotal: req.body.total,
    numberOfitems: req.body.numberOfitems,
    orderid: req.body.orderid
  };
  res.status(201).json({
    message: 'Order created',
    userCreated:order
  });
});

router.get('/:orderId',(req, res, next) =>{
  const orderId = req.params.userId;
  res.status(200).json({
    message: 'Succes finding id',
    id: orderId
  });
});
router.put('/:orderId',(req, res, next) =>{
  const orderId = req.params.userId;
  res.status(200).json({
    message: 'Update finding id',
    id: orderId
  });
});

router.delete('/:orderId',(req, res, next) =>{
  const orderId = req.params.userId ;
  res.status(200).json({
    message: 'Delete finding id',
    id: orderId
  });
});

module.exports = router;
