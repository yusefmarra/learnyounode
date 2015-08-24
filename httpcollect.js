var http = require('http');
// var bl = require('bl');

// console.log(bl);


http.get(process.argv[2], function(response){
  response.setEncoding('utf8');
  var dataEvents = '';
  var dataLength = 0
  response.on('data', function(data){
    dataEvents += data;
    dataLength += data.length;
  });
  response.on('end', function(end) {
    console.log(dataLength);
    console.log(dataEvents);
  })
})
