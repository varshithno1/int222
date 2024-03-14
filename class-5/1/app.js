const http = require("http");
const fs = require("fs");
const querystring = require("querystring");

const port = 9000;
http
  .createServer((req, res) => {
    if (req.url == "/") {
      fs.readFile("public/form.html", (e, d) => {
        if (e) {
          console.log("ERROR Reading!!! ", e);
          res.end("See Console");
        }
        res.end(d);
      });
    } else if (req.url == "/save-json") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        let data = querystring.parse(body);
        let msg = data.data;
        fs.appendFile("output.txt", msg + ",", (e) => {
          if (e) {
            console.log("ERROR Writing!!!!! ", e);
            res.end("See Console");
          }
          res.end("Successful");
        });
      });
    }
  })
  .listen(port, () => {
    console.log(`Listeing on http://localhost:${port}`);
  });
