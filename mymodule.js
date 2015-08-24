var fs = require('fs');

// module.exports = function(){
//   var buf = fs.readdir(process.argv[2], function(err, list) {
//     if (err) {
//       console.log(err);
//     } else {
//       for (var i in list){
//         if (list[i].split('.')[1]=="md"){
//           console.log(list[i]);
//         }
//       }
//     }
//   });
// }
module.exports = function(dir, filter, callback){
  var buf = fs.readdir(dir, function(err, list) {
    if (err) {
      callback(err)
    } else {
      var filterList = [];
      list.forEach(function(file){
        if (file.split('.')[1]==filter){
          filterList.push(file);
        }
      });
      callback(null, filterList);
    }
  });
}
