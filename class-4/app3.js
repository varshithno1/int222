const fs = require('fs');
const readableStream = fs.createReadStream('example.txt', []);

readableStream.on('data', (chunk) => {
  console.log('Recived chunk of data: ');
  console.log(chunk);
});

readableStream.on('end', () => {
  console.log('Finished reading data from the file.');
});


readableStream.on('error', (e) =>{
  console.error('Error reading data: ', e); 
})

