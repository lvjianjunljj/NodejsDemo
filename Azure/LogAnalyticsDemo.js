const request = require('request');
const crypto = require('crypto');

// Azure Log Analysis credentials, you can get it from Azure Log Analytics Overview or Advanced Settings
var workspaceId = 'c134cc31-1df5-4387-86cf-50f4a9d8e00f';
// You can get the secret key for Log analytics from Azure Log Analytics Advanced Settings
var sharedKey = '';

var apiVersion = '2016-04-01';
var processingDate = new Date().toUTCString();

var jsonData = {
    TagId: '4ac3461e-60c8-4bb7-a7bf-51937fca5318',
    Message: 'This is a test error log from nodejs',
    TraceEventType: 'Error',
    Environment: 'DEV'
}

// The querystring.stringify methods return strings suitable for use in a URL query string.
// In this scenario, we shouldn't convert the jsonData to a URL query string.
// var body = querystring.stringify(jsonData);

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

// request.post({ url: url, headers: headers, body: body }, function (error, response, body) {
//     console.log('error:', error);
//     console.log('statusCode:', response && response.statusCode);
//     console.log('body:', body);
// });

request({ url: url, headers: headers, body: body, method: 'POST' }, function (error, response, body) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
});