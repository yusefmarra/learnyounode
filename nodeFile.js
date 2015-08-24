var fs = require('fs');
var array = [];

var buf = fs.readFile(process.argv[2], {'encoding':'utf8'}, function(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data.split('\n').length-1);
  }
});
