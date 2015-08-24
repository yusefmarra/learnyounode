var fs = require('fs');
// console.log(process.argv);
var buf = fs.readFileSync(process.argv[2]);

var str = buf.toString();
var array = str.split('\n');

console.log(array.length-1);
