var http = require('http');
var url = require('url');

var server = http.createServer(function(request,response) {
  var reqUrl = url.parse(request.url, true);
  var date = new Date(reqUrl.query.iso);
  response.writeHead(200, { 'Content-Type': 'application/json' })
  if(reqUrl.pathname.split('/')[2] === 'parsetime'){
    var jObj = { 'hour': date.getHours(),
                 'minute': date.getMinutes(),
                 'second': date.getSeconds() }
    response.write(JSON.stringify(jObj));
  } else {
    response.write(JSON.stringify({'unixtime': date.getTime()}))
  }
  // console.log(reqUrl);
  // response.write("WHAT THE SHIT");
  response.end();
});

server.listen(process.argv[2])
