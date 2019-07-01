const http = require('http');

function Post() {


  // An object of options to indicate where to post to
  var post_options = {
    host: 'https://datacopdevfe.azurewebsites.net/datacop/api/v1/swaggerdoc',
    port: '80',
    path: '/compile',
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      // 'Content-Length': Buffer.byteLength(post_data)
    }
  };

  // Set up the request
  var post_req = http.request(post_options, function (res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      console.log('Response: ' + chunk);
    });
  });

  // post the data
  // post_req.write(post_data);
  post_req.end();
}






