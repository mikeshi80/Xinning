var mongoose = require('mongoose');
var conf = require('./conf.js').conf;

exports.connect = function() {
    mongoose.connect(conf.db_url);
};

exports.disconnect = function(callback) {
    mongoose.disconnect(callback);
};
