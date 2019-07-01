var request = require('request');
var querystring = require('querystring');

// Here we use getting token from AAD as an example
// For AAD, we need to use querystring.stringify() but not JSON.stringify() as request body serialization method
var body = {
    grant_type: 'client_credentials',
    client_id: '83ac8948-e5e1-4bbd-97ea-798a13dc8bc6',
    // Get the secret for Azure AAD application from key-vault or other source
    client_secret: '',
    resource: '83ac8948-e5e1-4bbd-97ea-798a13dc8bc6'
};

console.log('sending request start!!!');

var bodyQueryData = querystring.stringify(body);
var bodyQueryContentLength = bodyQueryData.length;
request(
    {
        uri: 'https://login.microsoftonline.com/72f988bf-86f1-41af-91ab-2d7cd011db47/oauth2/token',
        headers:
        {
            'Content-Length': bodyQueryContentLength,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: bodyQueryData,
        method: 'POST'
    },
    // Note: The call for this callback function is async, so in the CMD, the output maybe is
    // sending request start!!!
    // sending request end!!!
    // ...
    function (error, response, body) {
        console.log('function request demo...');
        if (!error && response.statusCode == 200) {
            console.log(body);
        } else {
            console.log(error);
            console.log(body);
            console.log(response.statusCode);
        }
    }
);

// It is same as function request()
request.post(
    {
        url: 'https://login.microsoftonline.com/72f988bf-86f1-41af-91ab-2d7cd011db47/oauth2/token',
        headers:
        {
            'Content-Length': bodyQueryContentLength,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: bodyQueryData,
    },
    function (error, response, body) {
        console.log('function request.post demo...');
        if (!error && response.statusCode == 200) {
            console.log(body);
        } else {
            console.log(error);
            console.log(body);
            console.log(response.statusCode);
        }
    }
);

console.log('sending request end!!!');


