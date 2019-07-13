// Use lib http is to create a REST API service.
// Detail doc link: https://www.w3schools.com/nodejs/nodejs_http.asp
// It is so easy to create a REST API service without routes
// But any route on the path just need to be implemented inside the function "http.createServer"
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Hello World!');
    res.write(req.url);
    res.end();
}).listen(8080);