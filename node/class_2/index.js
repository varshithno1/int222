const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url == "/"){
        fs.writeFile("FS/example1.txt", "Hello", "utf8", (e)=> {
            if(e){
                console.dir(e);
                res.writeHead(500, { 'Content-Type' : "text/plain"})
                res.end("Internal Server Error");
                return;
            }
        })
        fs.readFile("FS/example1.txt", 'utf8', (e, d) => {
            if(e){
                console.dir(e);
                return;
            }
            res.writeHead(200, { 'Content-Type' : "text/plain"})
            res.end(`File data: ${d}`);
        })
        const data = fs.readFileSync("FS/example.txt", "utf8");
        res.end(data);
    }
})

const port = 9000;
server.listen(port, () => {
    console.log("Server is running on: ");
    console.log(`http://localhost:${port}`);
})