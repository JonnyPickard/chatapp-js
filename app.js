var express = require('express');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test-chatapp');

var app = express();

app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

app.get('/', function(req, res){
  res.render('index.html');
});

app.listen(3000, function () {
  console.log('Chatapp listening on port 3000!');
});
