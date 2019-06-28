var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
console.log(trees.indexOf('redwood') > -1);
console.log('redwood' in array);


console.log(' ');

var car = { make: 'Honda', model: 'Accord', year: 1998 };

console.log('make' in car);
// expected output: true

delete car.make;
if ('make' in car === false) {
  car.make = 'Suzuki';
}

console.log(car.make);

var http = require('http');

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

// Post();

var request = require('request');
var querystring = require('querystring');

// var body = {
//   grant_type: 'client_credentials',
//   client_id: '83ac8948-e5e1-4bbd-97ea-798a13dc8bc6',
//   client_secret: '',
//   resource: '83ac8948-e5e1-4bbd-97ea-798a13dc8bc6'
// };

// var bodyData = querystring.stringify(body);
// var contentLength = bodyData.length;

// request(
//   {
//     uri: 'https://login.microsoftonline.com/72f988bf-86f1-41af-91ab-2d7cd011db47/oauth2/token',
//     headers:
//     {
//       'Content-Length': contentLength,
//       'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     body: bodyData,
//     method: 'POST'
//   },
//   function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//       console.log(body);
//     } else {
//       console.log(error);
//       console.log(body);
//       console.log(response.statusCode);
//     }
//   }
// );


// var customerId = '';
// var tableName = '';
// var date = '';
// var uri = `https://${customerId}.ods.opinsights.azure.com/api/logs?api-version=2016-04-01`;

// var buildSignature = '';

// var body = {
//   grant_type: 'client_credentials',
//   client_id: '83ac8948-e5e1-4bbd-97ea-798a13dc8bc6',
//   client_secret: '',
//   resource: '83ac8948-e5e1-4bbd-97ea-798a13dc8bc6'
// };

// var bodyData = querystring.stringify(body);
// var contentLength = bodyData.length;

// request(
//   {
//     uri: uri,
//     headers:
//     {
//       'Content-Length': contentLength,
//       'Accept': 'application/json',
//       'Log-Type': tableName,
//       'Authorization': buildSignature,
//       'x-ms-date': date
//     },
//     body: bodyData,
//     method: 'POST'
//   },
//   function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//       console.log(body);
//     } else {
//       console.log(error);
//       console.log(body);
//       console.log(response.statusCode);
//     }
//   }
// );




// var contentLength = Buffer.byteLength(req.body['log-entry'], 'utf8');

// var authorization = 'POST\n' + contentLength + '\napplication/json\nx-ms-date:' + processingDate + '\n/api/logs';

// // encode string using Base64(HMAC-SHA256(UTF8(StringToSign)))
// authorization = crypto.createHmac('sha256', sharedKey).update(authorization.toString('utf8')).digest('base64');

// authorization = 'Authorization: SharedKey ' + workspaceId + ':' + authorization;

// var body = '123444';
// var bodyData = querystring.stringify(body);
// console.log(bodyData);




var request = require('request');
var crypto = require('crypto');

// Azure Log Analysis credentials
var workspaceId = '76310b5b-2f07-4a19-a006-8e94f44c7167';
var sharedKey = 'hlbYjAVMcajD16Y8DQtvJDPEVcUMgn4xFRspUSMRPhzuPt2UG2h+HgkflhBpPNqNQfF8pYXyjv3ferQbpGjJgA==';

var apiVersion = '2016-04-01';
var processingDate = new Date().toUTCString();


// var jsonData = [{
//    "slot_ID": 12345,
//     "ID": "5cdad72f-c848-4df0-8aaa-ffe033e75d57",
//     "availability_Value": 100,
//     "performance_Value": 6.954,
//     "measurement_Name": "last_one_hour",
//     "duration": 3600,
//     "warning_Threshold": 0,
//     "critical_Threshold": 0,
//     "IsActive": "true"
// },
// {   
//     "slot_ID": 67890,
//     "ID": "b6bee458-fb65-492e-996d-61c4d7fbb942",
//     "availability_Value": 100,
//     "performance_Value": 3.379,
//     "measurement_Name": "last_one_hour",
//     "duration": 3600,
//     "warning_Threshold": 0,
//     "critical_Threshold": 0,
//     "IsActive": "false"
// }]

var jsonData = {
  TagId: '4ac3461e-60c8-4bb7-a7bf-51937fca5318',
  Message: 'This is a test error log from nodejs',
  TraceEventType: 'Error',
  Environment: 'DEV'
}

var body = JSON.stringify(jsonData);

var contentLength = Buffer.byteLength(body, 'utf8');

var stringToSign = 'POST\n' + contentLength + '\napplication/json\nx-ms-date:' + processingDate + '\n/api/logs';
var signature = crypto.createHmac('sha256', new Buffer(sharedKey, 'base64')).update(stringToSign, 'utf-8').digest('base64');
var authorization = 'SharedKey ' + workspaceId + ':' + signature;

var headers = {
  "content-type": "application/json",
  "Authorization": authorization,
  "Log-Type": 'csharpmvcwebapiapplication',
  "x-ms-date": processingDate
};

var url = 'https://' + workspaceId + '.ods.opinsights.azure.com/api/logs?api-version=' + apiVersion;

request.post({ url: url, headers: headers, body: body }, function (error, response, body) {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
});