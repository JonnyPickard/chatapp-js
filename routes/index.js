var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.sendFile('layout.html', {root: './views/layouts'});
});

module.exports = router;
