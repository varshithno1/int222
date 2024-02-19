const querystring = require('querystring');

const string = 'foo=bar&baz=qux';
const parsedString = querystring.parse(string);
console.log(parsedString);