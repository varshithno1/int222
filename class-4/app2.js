const buffer1 = Buffer.from('Hello', 'utf-8');
const buffer2 = Buffer.from(' World', 'utf-8');

//concatinating buffers
const concatinatedBuffer = Buffer.concat([buffer1, buffer2]);
console.log(concatinatedBuffer.toString('utf-8'));
//output Hello World
