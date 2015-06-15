var bcrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');
var promise = require('bluebird');
var db = require('../db.js');


var userSchema = new mongoose.Schema({
  username: String,
  password: String
});

var User = mongoose.model('User', userSchema);

userSchema.pre('save', function(next){
  var cipher = promise.promisify(bcrypt.hash);
  return cipher(this.password, null, null).bind(this)
    .then(function(hash){
      this.password = hash;
      next();
    });
});

User.comparePassword = function(attemptedPassword, savedPassword, callback){
  bcrypt.compare(attemptedPassword, savedPassword, function(err, isMatch){
    callback(null, isMatch);
  });
};

module.exports = User;
