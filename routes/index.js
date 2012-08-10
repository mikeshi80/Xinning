
/*
 * GET home page.
 */

var mock_pics = require('../mock/pics');
var mock_newses = require('../mock/news');
var db_news = require('../models/news');
var intro = require('../mock/intro');

exports.index = function(req, res){
    db_news.listTitles(5, function(err, newses) {
        res.render('index',
            {
                title: 'Xinning Aparts',
            pics: mock_pics.pics,
            newses: newses,
            intro: intro.intro
            });
    });
};

exports.admin = require('./admin');
