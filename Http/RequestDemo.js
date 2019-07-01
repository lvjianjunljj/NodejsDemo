const request = require('request');
const querystring = require('querystring');
const https = require('https')

// There are three ways to send http request.
// Here we use getting token from AAD as an example
// For AAD, we need to use querystring.stringify() but not JSON.stringify() as request body serialization method
var body = {
    grant_type: 'client_credentials',
    client_id: '83ac8948-e5e1-4bbd-97ea-798a13dc8bc6',
    // Get the secret for Azure AAD application from key-vault or other source
    client_secret: '',
    resource: '83ac8948-e5e1-4bbd-97ea-798a13dc8bc6'
};
var bodyData = querystring.stringify(body);
var contentLength = bodyData.length;


console.log('sending request start!!!');


request(
    {
        uri: 'https://login.microsoftonline.com/72f988bf-86f1-41af-91ab-2d7cd011db47/oauth2/token',
        headers:
        {
            'Content-Length': contentLength,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: bodyData,
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
            'Content-Length': contentLength,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: bodyData,
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

// It is another function to send post request
const options = {
    hostname: 'login.microsoftonline.com',
    //   port: 8080,
    path: '/72f988bf-86f1-41af-91ab-2d7cd011db47/oauth2/token',
    method: 'POST',
    headers: {
        'Content-Length': contentLength,
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}

const req = https.request(options, (res) => {
    // console.log(`statusCode: ${res.statusCode}`)

    res.on('data', (d) => {
        console.log('function https.request demo...');
        process.stdout.write(d + '\n');
        // console.log(d.toString());
    })
})

req.on('error', (error) => {
    console.error(error)
})

// Send the request
req.write(bodyData);
req.end();


console.log('sending request end!!!');
