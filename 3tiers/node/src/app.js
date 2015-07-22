var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

/**
 * Session Lib
 */
var multer = require('multer');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var mongoIp = process.env.MONGODB_PORT_27017_TCP_ADDR;

var routes = require('./routes/index');
var login = require('./routes/login');
var register = require('./routes/register');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(session({
//  secret: "hogehoge",
//  store: new MongoStore({
//    db: 'session',
//    host: mongoIp,
//    clear_interval: 60 * 5
//  }),
//  cookie: {
//    httpOnly: false,
//    maxAge: new Date(Date.now() + 60 * 5 * 1000)
//  }
//}));

app.use(multer({ dest: '/src/public/uploads/'}))
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Login Check 
 */
//var loginCheck = function (req, res, next) {
//  if(req.session.user) {
//    next();
//  } else {
//    res.redirect('/node/login');
//  }
//};

app.get('/node', routes);
app.post('/node/login', login);
app.post('/node/register', register);
//app.get('/node/logout', function(req, res) {
//  req.session.destroy();
//  res.sender('Logout');
//});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
