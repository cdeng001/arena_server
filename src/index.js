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
        try{
            var j = JSON.parse(d);
        }
        catch(err){
            console.log(err);
        }
        
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

server.listen(8000, function(){
    console.log("server listening on port 8000.");
});
