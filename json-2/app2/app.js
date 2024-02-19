const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

const port = 9090;
http.createServer((req, res) => {
    if (req.url == '/') {
        fs.readFile('public/index.html', (e, d) => {
            if(e){
                console.log("ERROR!!! ", e);
                res.end("ERROR!!! - Check console");
            }
            else{
                res.end(d);
            }
        })
    }
    else if(req.url == "/server-json"){
        let body = "";
        req.on('data', (chunk) => {
            body+=chunk;
        })
        req.on('end', () => {
            let jsonData = querystring.parse(body).jsonData;
            const jsonString = JSON.stringify(JSON.parse(jsonData));
            fs.writeFile('./public/new.json', jsonString, (e) => {
                if(e){
                    console.log("ERROR WRITING!!!! ", e);
                    res.end("Check Console");
                }
                else{
                    res.end("Sucessful");
                }
            })
        })
    }
}).listen(port);
