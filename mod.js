var mymodule = require('./mymodule.js');


mymodule(process.argv[2],process.argv[3],function(err, data){
    if (err) {
      console.log(err);
    } else {
      data = data.join('\n');
      console.log(data);
    }
});
