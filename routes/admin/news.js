exports.edit = function(req, res) {
    res.render('admin/news');
};

var db = require('../../models/news');
exports.save = function(req, res) {
    console.log('title is ' + req.body.title);
    console.log('content is ' + req.body.content);
    db.add(req.body.title, req.body.content, function(err, entity) {
        console.log('the news is added, the id is ' + entity._id);
    });
    res.render('admin/index');
};
