const fs = require('fs');
const writableStream = fs.createWriteStream('output.txt');
const data = ['Hello World\n', 'This is test\n'];
data.forEach(chunk => {
  writableStream.write(chunk);
});

writableStream.end();

writableStream.on('finish', () => {
  console.log('Fnished writing data to file.');
});

writableStream.on('error', (e) => {
  console.log('Error Writing data: ', err);
});
