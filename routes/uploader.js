var fs = require('fs');

exports.ckeditor_uploader = function(req, res) {
    var upload = req.files.upload;
    fs.readFile(upload.path, function(err, data) {
        var path = require('path');
        var filename = path.basename(upload.path) + path.extname(upload.name);
        var newPath = __dirname + '/../public/uploads/images/editor/' + filename;
        fs.writeFile(newPath, data, function(err) {
            fs.unlink(upload.path);
            var url = '/uploads/images/editor/' + filename;
            res.send('<script>window.parent.CKEDITOR.tools.callFunction(' +
                    req.query.CKEditorFuncNum + ', "' + url + '");</script>');
        });
    });
};
