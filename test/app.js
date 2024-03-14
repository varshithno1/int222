const http = require('http');
const fs = require('fs');

const port = 9090;
http.createServer((req, res) => {
    if(req.url == "/"){
        fs.readFile("public/example1.txt", (e, d) => {
            if(e)
                console.log("ERROR: ", e);
                res.end("ERROR!! - Check console.");
            }else{
                // res.end(d);
                fs.writeFile("public/example2.txt", d, (e) => {
                    if(e){
                        console.log("ERROR Writing!!: ", e);
                        res.end("ERROR Check Console");
                    }
                    else{
                        res.end("Sucessful");
                    }
                })
            }
        })
    }else if(req.url == "/stream"){
        const readableStream = fs.createReadStream('public/example1.txt', {});
        readableStream.on('data', (chunk) => {
            console.log("Recived chunk");
            console.log(chunk);
            const writableStream = fs.createWriteStream('public/example2.txt');
            writableStream.write(chunk);
            writableStream.end();
            writableStream.on('end', () => {
                console.log("Finish writing data");
            })
            writableStream.on('error', (e) => {
                console.log("Error writing data: ", e);
            })
        })
        readableStream.on('end', () => {
            console.log("Finished reading data");
            res.end("Finished reading!!!");
        })
        readableStream.on('error', (e) => {
            console.log('ERROR reading data: ', e);
            res.end("See Console");
        })
    }else if(req.url == "/stream2"){
        const readableStream = fs.createReadStream('public/example1.txt', {
            highWaterMark : 8,
        });
        const writableStream = fs.createWriteStream('public/example2.txt');
        readableStream.pipe(writableStream);
        readableStream.on('error', (e) => {
            console.log("ERROR!!!", e);
            res.end("See console");
        })
        writableStream.on('finish', () => {
            res.end("Done!");
        })
    }
}).listen(port);