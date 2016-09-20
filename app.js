var express = require('express');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test-chatapp');
require('./models/config');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

app.use(express.static('public'));

app.use('/', index);
app.use('/users', users);

app.listen(3000, function () {
  console.log('Chatapp listening on port 3000!');
});
