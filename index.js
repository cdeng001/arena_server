// content of index.js
var net = require('net');

var server = net.createServer(function(socket) {
    socket.write('Echo server');
    socket.pipe(socket);
});

server.listen(3000, '127.0.0.1');
