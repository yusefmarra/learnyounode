// console.log(process.argv);
total = 0;
for (var i in process.argv.slice(2)){
  total += Number(process.argv.slice(2)[i]);
  // console.log(process.argv.slice(2)[i]);
}
console.log(total);
