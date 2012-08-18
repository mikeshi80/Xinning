
/**
 * Module dependencies.
 */

var express = require('express'),
    routes  = require('./routes'),
    conf    = require('./conf').conf,
    http    = require('http'),
    uploader = require('./routes/uploader'),
    s3 = require('./my-connect-stream-s3'),
    s3Middleware = s3(conf.s3_opts);


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
  app.use(express['static'](__dirname + conf.static_dir));
});

app.configure('development', function() {
  app.use(express.errorHandler());
});

var db = require('./db');

db.connect();

app.on('close', db.disconnect);

app.get('/', routes.index);
app.get('/news/:id', routes.news);
app.get('/admin', routes.admin.index);
app.get('/admin/index', routes.admin.index);

app.get('/admin/news/edit/:id?', routes.admin.news.edit);
app.post('/admin/news/save/:id?', routes.admin.news.save);
app.get('/admin/news/:id', routes.admin.news.preview);

app.post('/ckeditor_uploader', uploader.s3NameMiddleware, s3Middleware, uploader.ckeditor_uploader);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
