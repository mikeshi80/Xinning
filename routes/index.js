
/*
 * GET home page.
 */

var mock_pics = require('../mock/pics');
var mock_newses = require('../mock/news');

exports.index = function(req, res){
    res.render('index',
        {
            title: 'Xinning Aparts',
            pics: mock_pics.pics,
            newses: mock_newses.newses
        });
};
