var net = require('net');

function pad(num) {
  num = String(num);
  if (num.length < 2) {
    return '0'+num
  }
  return num;
}

var server = net.createServer(function(socket){
  var date = new Date();
  var time = date.getFullYear() +
      '-' + (pad(date.getMonth()+1)) +
      '-' + date.getDate() +
      ' ' + date.getHours()+
      ':'+date.getMinutes();
  // console.log(date);
  socket.end(time);
});

server.listen(process.argv[2]);
