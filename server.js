//Babel ES6/JSX Compiler
require('babel-register');

var path = require('path');
var express = require('express');
var app = express();
var setupPassport = require('./server/config/passport');
var flash = require('connect-flash');
var appRouter = require('./server/routers/appRouter.js')(express);
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var jsonParser = bodyParser.json();
var compression = require('compression');
var favicon = require('serve-favicon');
var logger = require('morgan');
var async = require('async');
var colors = require('colors');
var request = require('request');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var swig  = require('swig');
var xml2js = require('xml2js');
var _ = require('underscore');

var routes = require('./app/routes');

app.use(cookieParser())
app.use(session({ secret: '4564f6s4fdsfdfd', resave: false, saveUninitialized: false }))

app.use('/styles', express.static(__dirname + '/styles'))

app.use(flash())
app.use(function(req, res, next) {
    res.locals.errorMessage = req.flash('error')
    next()
});

app.use(jsonParser)
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(compression());
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

setupPassport(app)

/**
 * Main routes file, all API routes are defined in appRouter.
 * Base URL is currently set to '/' but '/api' would also make sense.
 */
app.use('/', appRouter)

app.use(function(req, res) {
  Router.match(
    { 
      routes: routes.default, 
      location: req.url 
    }, 
    function(err, redirectLocation, renderProps) {
      if (err) {
        res.status(500).send(err.message)
      } else if (redirectLocation) {
        res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
      } else if (renderProps) {
        var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
        var page = swig.renderFile('views/index.html', { html: html });
        res.status(200).send(page);
      } else {
        res.status(404).send('Page Not Found')
      }
    }
  );
});

// start app
app.set('port', process.env.PORT || 8000);

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
