exports.edit = function(req, res) {
    res.render('admin/news');
};

exports.save = function(req, res) {
    console.log('title is ' + req.body.title);
    console.log('content is ' + req.body.content);
    res.render('admin/index');
};
