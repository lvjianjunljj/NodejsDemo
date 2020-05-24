/*
 * OneNote link: https://microsoftapc-my.sharepoint.com/personal/jianjlv_microsoft_com/_layouts/OneNote.aspx?id=%2Fpersonal%2Fjianjlv_microsoft_com%2FDocuments%2FJianjun%20%40%20Microsoft&wd=target%28Azure.one%7C82D4B6EF-4D8B-4376-9D6B-EE7003D7D902%2FFor%20nodejs%7CC927C742-8454-4511-A34E-A1C6019C9898%2F%29
 * Note: for the lib 'adal-node', we don't need to add the dependency info in package.json, 
 * because the dependency reference is azure-keyvault => ms-rest-azure => adal-node.
 * When we add the dependency info of azure-keyvault in package.json, we will also have the lib dependency of adal-node.
 */

var KeyVault = require('azure-keyvault');
var AuthenticationContext = require('adal-node').AuthenticationContext;
var clientId = "83ac8948-e5e1-4bbd-97ea-798a13dc8bc6";
var clientSecret = "7i3FJARjC7gfijm5rcUfYCmD1FSv0OuOWrLJlJgEfMc=";
var vaultUri = "https://datacopdev.vault.azure.net/";
// Authenticator - retrieves the access token
var authenticator = function (challenge, callback) {
// Create a new authentication context.
	var context = new AuthenticationContext(challenge.authorization);
	// Use the context to acquire an authentication token.
	return context.acquireTokenWithClientCredentials(challenge.resource, clientId, clientSecret, function (err, tokenResponse) {
		if (err) throw err;
		// Calculate the value to be set in the request's Authorization header and resume the call.
		var authorizationValue = tokenResponse.tokenType + ' ' + tokenResponse.accessToken;
		return callback(null, authorizationValue);
	});
};

var credentials = new KeyVault.KeyVaultCredentials(authenticator);
var client = new KeyVault.KeyVaultClient(credentials);
var secretName = 'AADDataCopClientSecret';
secretVersion = '' //leave this blank to get the latest version;
client.getSecret(vaultUri, secretName, secretVersion).then((result) => {
    console.log(`result.toString(): ${result}`);
    console.log('result: ');
    console.log(result);
    console.log(`result.value: ${result.value}`);
});

/*
 * Output:
 result.toString(): [object Object]
 result:
 { value: 'XXX',
  id: 'XXX',
  attributes:
   { enabled: true,
     created: 2019-03-25T09:25:33.000Z,
     updated: 2019-03-25T09:25:33.000Z,
     recoveryLevel: 'Purgeable'
   }
 }
 result.value: XXX
 */


