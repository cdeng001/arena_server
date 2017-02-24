// content of index.js
var net = require('net');

var server = net.createServer();
server.on('connection', handleConnection);

function handleConnection(conn){
    var remote = conn.remoteAddress + ':' + conn.remotePort;
    console.log("client connected from " + remote);

    conn.on('data', onConnData);
    conn.once('close', onConnClose);
    conn.on('error', onConnError);

    function onConnData(d) {
        var j = JSON.parse(d);
        console.log('connection data from %s: %j', remote, d);
        console.log(j);
        conn.write(d);
    }

    function onConnClose() {
        console.log('connection from %s closed', remote);
    }

    function onConnError(err) {
        console.log('Connection %s error: %s', remote, err.message);
    }
}

server.listen(3000, function(){
    console.log("server listening on port 3000.");
});
