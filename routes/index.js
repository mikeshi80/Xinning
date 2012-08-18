
/*
 * GET home page.
 */

var async = require('async');

var mock_pics = require('../mock/pics');
var mock_newses = require('../mock/news');
var db_news = require('../models/news');
var intro = require('../mock/intro');

exports.index = function(req, res){
    async.parallel({
        title: function(callback) {
                   process.nextTick(function() {
                       callback(null, 'Xinning Aparts');
                   });
               },
        pics: function(callback) {
                  process.nextTick(function() {
                      callback(null, mock_pics.pics);
                  });
              },
        newses: function(callback) {
                    db_news.listTitles(5, function(err, newses) {
                        callback(err, newses);
                    });
                },
        intro: function(callback) {
                   process.nextTick(function() {
                       callback(null, intro.intro);
                   });
               }
    }, function(err, results) {
        if (err) {
            res.send('Something error raised, err is ' + err);
        } else {
            console.log(util.inspect(results));
            res.render('index', results);
        }
    });

};

var util = require('util');

exports.news = function(req, res) {
    async.parallel({
        news: function(callback) {
                  db_news.getById(req.params.id, function(err, news) {
                      callback(err, news);
                  });
              },
        title: function(callback) {
                   process.nextTick(function() {
                       callback(null, 'News');
                   });
               }
    }, function(err, results) {
        if (err) {
            res.send('Something error raised, err is ' + err);
        } else {
            console.log(util.inspect(results));
            res.render('news', results);
        }
    });
};

exports.admin = require('./admin');
