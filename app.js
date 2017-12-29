// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var routes = require('./routes/index');
var multimediaapi = require('./routes/multimedia-api');
var technicalapi = require('./routes/technical-api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(favicon(path.join(__dirname, 'public/images', 'logo-only.png')));
app.use(logger('dev'));                                     // log every request to the console
app.use(bodyParser.json());                                 // pull information from html in POST
app.use(bodyParser.urlencoded({
  extended: false
}));                           // pull information from html in POST
app.use(cookieParser());                                    // used for csrf
                                                            // need methodOverride to simulate DELETE and PUT
app.use(express.static(path.join(__dirname, 'public')));    // set the static files location /public/img will be /img for users

//Connect to DB
// mongoose.connect("mongodb://localhost/cs89_db", { useMongoClient: true });
// mongoose.connect("mongodb://coolstuff89:mohanraj@kahana.mongohq.com:10019/cs89_db");
mongoose.connect("mongodb://coolstuff89:Balumuri1989@coolcluster-shard-00-00-wfsvs.mongodb.net:27017,coolcluster-shard-00-01-wfsvs.mongodb.net:27017,coolcluster-shard-00-02-wfsvs.mongodb.net:27017/cs89_db?ssl=true&replicaSet=CoolCluster-shard-0&authSource=admin");

// REGISTER OUR ROUTES -------------------------------
app.use('/', routes);       // all of our routes will be prefixed with /
app.use('/multimedia-api', multimediaapi);       // all of our routes will be prefixed with /multimedia-api
app.use('/technical-api', technicalapi);       // all of our routes will be prefixed with /technical-api

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

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
