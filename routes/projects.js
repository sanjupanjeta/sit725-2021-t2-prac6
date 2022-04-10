var router = require('express').Router();

router.get('/addTwoNumbers/:firstNumber/:secondNumber', function(req,res,next) {
  var firstNumber = parseInt(req.params.firstNumber) 
  var secondNumber = parseInt(req.params.secondNumber)
  var result = firstNumber + secondNumber || null
  if(result == null) {
    res.json({result: result, statusCode: 400}).status(400)
  }
  else { res.json({result: result, statusCode: 200}).status(200) } 
})

module.exports = router;