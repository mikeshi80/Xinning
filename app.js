
/**
 * Module dependencies.
 */

var express = require('express'),
    routes  = require('./routes'),
    conf    = require('./conf').conf,
    http    = require('http');


var app     = express();


app.configure(function(){
  app.set('port', process.env.PORT || conf.http_port);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser(conf.cookie_secret));
  app.use(express.session());
  app.use(app.router);
  app.use(require('less-middleware')({ src: __dirname + conf.less_dir}));
  app.use(express.static(__dirname + conf.static_dir));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
