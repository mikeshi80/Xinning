var fs = require('fs');
var path = require('path');

var s3_opts = require('../conf').conf.s3_opts;

var basepath = 'https://s3-' + s3_opts.region + '.amazonaws.com/' + s3_opts.bucketName + '/';

exports.s3NameMiddleware = function (req, res, next) {
    var upload = req.files.upload;
    req.files.upload.s3ObjectName = path.basename(upload.path) + path.extname(upload.name);
    next();
};
exports.ckeditor_uploader = function(req, res) {
    var url = basepath + req.files.upload.s3ObjectName;
    res.send('<script>window.parent.CKEDITOR.tools.callFunction(' +
                req.query.CKEditorFuncNum + ', "' + url + '");</script>');
};
