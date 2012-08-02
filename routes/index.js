
/*
 * GET home page.
 */

var mock_pics = require('../mock/pics');
var mock_newses = require('../mock/news');
var intro = require('../mock/intro');

exports.index = function(req, res){
    res.render('index',
        {
            title: 'Xinning Aparts',
            pics: mock_pics.pics,
            newses: mock_newses.newses,
            intro: intro.intro
        });
};

exports.admin = require('./admin');
