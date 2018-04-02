var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('hbs');

var index = require('./routes/index');
var team = require('./routes/team');
var speakers = require('./routes/speakers');
var schedule = require('./routes/schedule');
var signup = require('./routes/signup');
var gitpayload = require('./routes/gitpayload');
var signup_intro = require('./routes/signup-intro');
var signup_group = require('./routes/signup-group');
var signup_group_create = require('./routes/signup-group-create');
var signup_complete = require('./routes/signup-complete');
var signup_submitted = require('./routes/signup-submitted');
var signup_error = require('./routes/signup-error');
var notfound = require('./routes/notfound');
var ambassador = require('./routes/ambassador');
var android = require('./routes/android');
var tickets = require('./routes/tickets');
var workshops = require('./routes/workshops');
var talks = require('./routes/talks');
var slack = require('./routes/slack');
var secret = require('./routes/secret');

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

app.use('/', index);
app.use('/team', team);
app.use('/speakers', speakers);
app.use('/schedule', schedule);
app.use('/signup', signup);
app.use('/gitpayload', gitpayload);
app.use('/signup-complete', signup_complete);
app.use('/signup-submitted', signup_submitted);
app.use('/signup-intro', signup_intro);
app.use('/signup-group', signup_group);
app.use('/signup-group-create', signup_group_create);
app.use('/signup-error', signup_error);
app.use('/notfound', notfound);
app.use('/ambassador', ambassador);
app.use('/android', android);
app.use('/tickets', tickets);
app.use('/bilhetes', tickets);
app.use('/workshops', workshops);
app.use('/talks', talks);
app.use('/slack', slack);
app.use('/s3cr3t', secret);
app.use('/survival-guide', require('./routes/survival-guide'));
app.use('/schedulepdf', require('./routes/schedulepdf'));
app.use('/candidaturas', require('./routes/candidaturas'));

// register path to partials
hbs.registerPartials(__dirname + '/views/partials');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(process.env.PORT || 8080, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

module.exports = app;
