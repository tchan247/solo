var mongoose = require('mongoose');
var promise = require('bluebird');
var db = require('../db.js');


var textSchema = new mongoose.Schema({
  title: String,
  url: String
});

var Text = mongoose.model('Text', textSchema);

module.exports = Text;
