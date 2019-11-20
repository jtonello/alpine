const https = require('https');
const os = require('os');

console.log("Kubia server starting...");

var handler = function(request, response) {
  console.log("Received request from " + request.connection.remoteAddress);
  response.writeHead(200);
  response.end("You've hit the server named " + os.hostname() + "\n");
 };
 
 var www = https.createServer(handler);
 www.listen(8443);
