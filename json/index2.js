const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url == "/"){
        try {
            const data = fs.readFileSync("FS/example.json", "utf8");
            res.writeHead(200, { 'Content-Type' : "json"})
            res.end(data);
        } catch (e) {
            res.writeHead(500, { 'Content-Type' : "json"})
            console.log(e);
        }
    }
})

const port = 9000;
server.listen(port, () => {
    console.log("Server is running on: ");
    console.log(`http://localhost:${port}`);
})