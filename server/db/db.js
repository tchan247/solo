var mongoose = require('mongoose');
var mongoUrl = 'mongodb://127.0.0.1:27017';
var User = require('./models/user.js');

mongoose.connect(mongoUrl);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'db error.connection error'));
db.once('open', function(callback){
  console.log('opened db');
});

module.exports = db;

