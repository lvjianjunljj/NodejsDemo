console.log("hello node.js");
console.log(1234);
var a = 1, b = 2;
var c = '2018';
var d = Date.parse(c);
console.log(a / b);
console.log(d);
console.log(Date.parse('2019-a'));
console.log(Date.parse('2020'));
console.log(isNaN(Date.parse('2019a')));

console.log('----------------------');

authenticatedUserTokens = [];
cc = { a: 1, b: 2 }
authenticatedUserTokens.push(cc)
for (var i = 0; i < 10; i++) {
    let currentUser = null;
    let userToken = authenticatedUserTokens.find((user) => {
        currentUser = user;
        user.a === 2;
    });
    if (!userToken) {
        authenticatedUserTokens.push({ a: i + 3, b: 2 });
    }
    console.log(userToken);
    console.log(currentUser);

}

