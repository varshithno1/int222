const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello');
})

const port = 9000;
server.listen(port, () => {
    console.log("lisening on port '9000'");
})