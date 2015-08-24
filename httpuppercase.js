var http = require('http');
// var fs = require('fs');
var map = require('through2-map');

// console.log(process.argv);

var server = http.createServer(function(request,response) {
  // request.pipe(response);
  request.setEncoding('utf8');
  request.pipe(map(function(chunk){
    return chunk.toString().toUpperCase()
  })).pipe(response);
});

server.listen(process.argv[2]);
