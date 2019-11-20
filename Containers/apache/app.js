const http = require('http');
const https = require('https');
const os = require('os');

console.log("Kubia server starting...");

var handler = function(request, response) {
  console.log("Received request from " + request.connection.remoteAddress);
  response.writeHead(200);
  response.end("You've hit the server named " + os.hostname() + "\n");
 };
 
 var www = http.createServer(handler);
 www.listen(8080);
 var mywww = http.createServer(handler);
 mywww.listen(8443);
