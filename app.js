var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var dotenv = require('dotenv').config();
var session = require('express-session');
var passport = require('passport');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  store: new (require('connect-pg-simple')(session))(),
  secret: process.env.SESSION_SECRET, //use a real secret
  resave: false, //resave means update whenever page is reloaded even if theres no changes made to it
  saveUninitialized: false, //false means only make sessions when user logs in, not on any page visit
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
  //cookie: { secure: true }
}));
app.use(passport.initialize());
app.use(passport.session());


//-----ROUTES----------
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};

  console.error('ERROR: ' + err.message);
  console.error(err.stack.length > 600 ? err.stack.substring(0, 600) + '...' : err.stack);

  // render the error
  res.status(err.status || 500);
  res.send({ status: 'error' });
});

module.exports = app;
