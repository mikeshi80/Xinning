var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var NewsSchema = new Schema({
    title: String,
    content: String,
    date: {type: Date, default: new Date()}
});

var News = mongoose.model('News', NewsSchema);

exports.add = function(title, content, callback) {
    var news = new News();
    news.title = title;
    news.content = content;
    news.save(callback);
};

