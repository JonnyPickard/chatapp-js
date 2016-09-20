var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

router.post('/login', function(req, res) {

  console.log(req.body);
  res.send('hello');
  // var query = User.where({
  //   name: req.name,
  //   password: req.password
  // });
  //
  // query.findOne(function (err, success) {
  //   if (err) return handleError(err);
  //   if (success) {
  //     res.send(true);
  //   }
  // });
});

module.exports = router;
