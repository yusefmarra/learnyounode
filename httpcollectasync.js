var http = require('http');

var done = 0;
var doneArr = [];
var urls = [process.argv[2],process.argv[3],process.argv[4]];

for (var i = 0; i < urls.length; i++) {
  getData(i, urls[i]);
}

function getData(i, url) {
  http.get(url, function(response){
    response.setEncoding('utf8');
    // console.log(i);
    var endData = '';
    response.on('end', function(end){
      done++
      // console.log(done);
      doneArr[i] = endData;
      if (done >= 3){
        for (var j = 0; j < doneArr.length; j++) {
          console.log(doneArr[j]);
        }
      }
    });
    response.on('data', function(data) {
      endData += data;
    });
  });
}
