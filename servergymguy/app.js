var express = require('express'),
    bodyParser = require('body-parser'),
    routes = require('./routes/index'),
    mongoose = require('mongoose');
    
    
    //change the user cred
    mongoose.connect('mongodb://sandeeppamujula:Sandeep6^@ds019796.mlab.com:19796/gymguydb');

var app = express();

app.use('/', routes);
app.use(bodyParser);

// middleware that is specific to this router
routes.use(function timeLog(req, res, next) {
  console.log('Time: ', new Date().toString());
  next();
});


var port = 8080;

app.listen(port, function () {
  console.log('gymguy app listening on port '+port);
});


//
//// catch 404 and forward to error handler
//app.use(function(req, res, next) {
//    var err = new Error('Not Found');
//    err.status = 404;
//    next(err);
//});
//
//// error handlers
//
//// development error handler
//// will print stacktrace
//if (app.get('env') === 'development') {
//    app.use(function(err, req, res, next) {
//        res.status(err.status || 500);
//        res.render('error', {
//            message: err.message,
//            error: err
//        });
//    });
//}
//
//// production error handler
//// no stacktraces leaked to user
//app.use(function(err, req, res, next) {
//    res.status(err.status || 500);
//    res.render('error', {
//        message: err.message,
//        error: {}
//    });
//});
//


