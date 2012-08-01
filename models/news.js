var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var NewsSchema = new Schema({
    link: String,
    title: String,
    content: String
});

var News = mongoose.model('News', NewsSchema);


