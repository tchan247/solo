var express = require('express');
var fs = require('fs');
var request = require('request');
var port = 8080;
var app = express();
var server = require('http').createServer(app);
var mongoose = require('mongoose');
var db = require('./server/db/db.js');
var User = require('./server/db/models/user.js');
var Text = require('./server/db/models/text.js');

app.use(express.static(__dirname));

app.get('/', function(req, res){
  fs.readFile('client/index.html', function(err, data){
    res.writeHead(200, {'Content-Type': 'text/html'} );
    res.end(data,'binary');
  });
});

app.get('/retrieve', function(req, res){
  var data = mongoose.model('Text');
  data.find({}, function(err, data){
    res.send(data);
  });
});

app.get('/*', function(req, res){
  console.log('app.get: ' + typeof req.url.slice(2,req.url.length-1));
  request({uri: req.url.slice(2,req.url.length-1)}, function(err, response, body){

    if(err) console.log(err);

    res.send(body);
  });
});

app.post('/add', function(req, res){
  req.on('data', function(data){
    data = JSON.parse(data);

    var text = new Text({
      title: data.title,
      url: data.url
    });

    text.save(function(err, data){
      if(err) {
        console.log(err);
      } 

    });
  });
});

app.delete('/*', function(req, res){
  var title = req.url.slice(1).replace(/%20/g, ' ');
  console.log(title);
  var data = mongoose.model('Text');
  data.find({title: title}).remove().exec();

  res.send();
});

app.listen(port);


