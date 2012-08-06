var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var NewsSchema = new Schema({
    title: String,
    content: String,
    date: {type: Date, default: new Date()},
    /**
     * editing -- it is still been editing, so not show
     * show    -- it will show
     * hide    -- it will not show
     * stick   -- it will always be sticked
     */
    type: {type: String, enum: ['editing', 'show', 'hide', 'stick'], default: 'show'}

});

var News = mongoose.model('News', NewsSchema);

exports.add = function(title, content, callback) {
    var news = new News();
    news.title = title;
    news.content = content;
    news.save(callback);
};

exports.getById = function(id, callback) {
    News.findOne({_id: id}, callback);
};

exports.changeType = function(id, type, callback) {
    exports.getById(id, function(err, news) {
        if (err !== null) {
            callback(err, null);
        } else {
            news.type = type;
            news.save();
            callback(null, news);
        }
    });
};

exports.edit = function(id, title, content, callback) {
    exports.getById(id, function(err, news) {
        if (err !== null) {
            callback(err, null);
        } else {
            var changed = false;
            if (title !== null && news.title !== title) {
                news.title = title;
                changed = true;
            }
            if (content !== null && news.content !== content) {
                news.content = content;
                changed = true;
            }

            if (changed) {
                news.date = new Date();
            }

            callback(null, news);
        }
    });
};

exports.remove = function(id, callback) {
    exports.getById(id, function(err, news) {
        if (err === null) {
            news.remove(callback);
        } else {
            callback(err);
        }
    });
};

exports.list = function(limit, callback) {
    News.find({type: ['show', 'stick']}).desc('date').limit(limit);
};
