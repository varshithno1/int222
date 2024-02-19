const http = require('http');
const fs = require('fs');

const port = 9090;
http.createServer((req, res) => {
    if(req.url == "/readFile"){
        fs.readFile("./public/example.txt", (err, data) => {
            if(err){
                console.log("ERROR!!!: ", err);
                res.end("See Console");
            }
            else{
                console.log("Read file sucessfully");
                res.writeHead(200, "Done", {test: true,"content-length": 50});
                res.end(data);
            }
        });
    }else if(req.url == "/readFileSync"){
        try{
            const data = fs.readFileSync("./public/example.txt", "utf-8");
            res.end(data);
        }catch(err){
            
            console.log("ERROR!!!: ", err);
            res.end("See console.");
        }
    }
}).listen(port, () => console.log(`Lisening on port http://localhost:${port}/`));
