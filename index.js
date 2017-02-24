// content of index.js
var net = require('net');

var server = net.createServer(function(socket) {
    console.log("client connecting . . . ");
    socket.write('Echo server');
    socket.pipe(socket);
});

server.listen(3000);
