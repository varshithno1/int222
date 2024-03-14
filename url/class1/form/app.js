const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");

const port = 8080;
http.createServer((req, res) => {
    const reqUrl = url.parse(req.url, true);
    const indexPath = "index.html";
    if (req.method == 'GET' && reqUrl.path == "/") {
      fs.readFile(indexPath, (e, d) => {
        if (e) {
          console.error("Error Reading!! ", e);
          res.end("See Console");
        } else {
          res.end(d);
        }
      });
    }
    else if(reqUrl.path == "/submit" && req.method == "POST"){
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        })
        req.on('end', () => {
            const formData = querystring.parse(body);
            const data = JSON.stringify(formData);
            console.log(data);
            // fs.writeFile("public/data.json", data, (e) => {
            //     if(e){
            //         console.error("ERROR Writing!! ", e);
            //         res.end("See console");
            //     }
            //     else{
            //         res.end("Sucessful");
            //     }
            // })
            const writeStram = fs.createWriteStream("public/data.json");
            writeStram.write(data);
            writeStram.end();
        })
        res.end("Done");
    }
    else {
      res.end("404 Not Found");
    }
  })
  .listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
  });
