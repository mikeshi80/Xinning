exports.edit = function(req, res) {
    if (req.params.id) {
        db.getById(req.params.id, function(err, news) {
            res.render('admin/news', {news: news});
        });
    } else {
        res.render('admin/news');
    }
};

var db = require('../../models/news');
exports.save = function(req, res) {
    console.log('title is ' + req.body.title);
    console.log('content is ' + req.body.content);
    db.add(req.body.title, req.body.content, function(err, entity) {
        console.log('the news is added, the id is ' + entity._id);
    });
    res.redirect('/admin/index');
};

exports.preview = function(req, res) {
    db.getById(req.params.id, function(err, news) {
        res.render('admin/news_prev', {news: news});
    });
};
