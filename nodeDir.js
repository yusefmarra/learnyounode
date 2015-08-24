var fs = require('fs');
// var array = [];



var buf = fs.readdir(process.argv[2], function(err, list) {
  if (err) {
    console.log(err);
  } else {
    for (var i in list){
      if (list[i].split('.')[1]=="md"){
        console.log(list[i]);
      }
    }
  }
});
