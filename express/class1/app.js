const express = require("express");
const app = express();
const fs = require('fs');
const port = 9000;

app.get('/readfile', (req, res) => {
    fs.readFile('views/example.txt', (e, d)=>{
        if(e){
            console.log("ERROR Reading!! ", e);
            res.send("See Console");
        }
        res.end(d);
    })
})

app.get('/writefile', (req, res) => {
    let msg = "writing!!!!!!!!";
    fs.writeFile('views/output.txt', msg, (e)=>{
        if(e){
            console.log("ERROR Reading!! ", e);
            res.send("See Console");
        }
        res.send("Sucessful");
    })
})

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
