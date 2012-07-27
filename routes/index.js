
/*
 * GET home page.
 */

var mock_pics = require('../mock/pics');

exports.index = function(req, res){
  res.render('index', { title: 'Xinning Aparts', pics: mock_pics.pics});
};
