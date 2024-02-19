//creating buffer
const buffer = Buffer.alloc(5);
//writing into buffer with utf-8 encoding
buffer.write('Hello', 'utf-8');
//converting toString from utf-8 encoding
const data = buffer.toString('utf-8');
console.log(data);//output hello
console.log(buffer);//output of buffer without converting
