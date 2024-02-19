const url = require('url');
const urlString = "https://www.youtube.com/?q=hello+world";
const parsedUrl = url.parse(urlString, true);
console.dir(parsedUrl);