// The lib http is to create a web service.
// Detail doc link: https://www.w3schools.com/nodejs/nodejs_http.asp
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Hello World!');
    res.write(req.url);
    res.end();
}).listen(8080);