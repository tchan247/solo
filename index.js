var express = require('express');
var fs = require('fs');
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

app.listen(port);

