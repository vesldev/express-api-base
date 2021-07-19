// configure environment vars
require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var router = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// setup routes
app.use('/', router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404);
  const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
  next(error);
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  const body = req.app.get('env') === 'development' ? { message: err.message, stack: err.stack } : { message: err.message };
  res.json(body);
});

module.exports = app;
