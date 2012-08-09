var news = require('./news');
var dbNews = require('../../models/news');
exports.news = news;

exports.index = function(req, res) {
    dbNews.listTitles(5, function(err, newses) {
        res.render('admin/index', {newses: newses});
    });
};
