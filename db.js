var mongoose = require('mongoose');
var conf = require('./conf.js').conf;

exports.connect = function() {
    console.log('db url is ' + conf.db_url);
    mongoose.connect(conf.db_url);
};

exports.disconnect = function(callback) {
    mongoose.disconnect(callback);
};
