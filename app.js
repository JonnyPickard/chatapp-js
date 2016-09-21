var express           = require('express');
var path              = require('path');
var cookieParser      = require('cookie-parser');
var bodyParser        = require('body-parser');
var expressValidator  = require('express-validator');
var flash             = require('connect-flash');
var session           = require('express-session');
var passport          = require('passport');
var LocalStrategy     = require('passport-local').Strategy;
var mongo             = require('mongodb');
var mongoose          = require('mongoose');

//Set up db
mongoose.connect('mongodb://localhost/chatapp');
var db      = mongoose.connection;

//Init app
var app     = express();

//View engine
app.set('views', path.join(__dirname, 'views'));

//bodyParser middleware
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use(cookieParser());

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Express session
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

//Passport init
app.use(passport.initialize());
app.use(passport.session());

//Express validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.'),
      root    = namespace.shift(),
      formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }

    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

//Use index for spa
app.use(function(req, res) {
  res.sendFile('layout.html', {root: './views/layouts'});
});

//Set port
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
  console.log('Server started on port ' + app.get('port'));
});
