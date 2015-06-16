var express = require('express');
var fs = require('fs');
var request = require('request');
var port = 8080;
var app = express();
var server = require('http').createServer(app);
var db = require('./server/db/db.js');

app.use(express.static(__dirname));

app.get('/', function(req, res){
  fs.readFile('client/index.html', function(err, data){
    res.writeHead(200, {'Content-Type': 'text/html'} );
    res.end(data,'binary');
  });
});

app.get('/*', function(req, res){
  console.log('app.get: ' + typeof req.url.slice(2,req.url.length-1));
  // {uri: 'https://en.wikipedia.org/wiki/Mongoose'}
  request({uri: req.url.slice(2,req.url.length-1)}, function(err, response, body){
    if(err) console.log(err);

    // var text;

    // if(typeof body === 'string') {
    //   text = [];
    //   var open = 0;

    //   for(var i = 0, len = body.length; i < len; i++) {
    //     if(body.slice(i-1, i+2) === '<p>') {
    //       open = i;
    //     }

    //     if(body.slice(i-1, i+3) === '</p>') {
    //       text.push(body.slice(open, i-1));
    //     }
    //   }
    // }

    // console.log(text);

    res.send(body);
  });
});

app.listen(port);


