const Emiter = require('events');
const myEmmiter = new Emiter();

myEmmiter.on('firstEvent', (arg1, arg2) => {
    console.log("Event occoured with arguments: " ,arg1, arg2);
});

myEmmiter.once('firstEvent', (arg1, arg2) => {
    console.log("This listener is gooing to execute only once.");
});

myEmmiter.emit('firstEvent', 'Hello', 'Hi');

console.log("----------------------------------------------");

for(let i = 0; i < 5; i++){
    myEmmiter.emit('firstEvent', 'Hello', 'Hi');
}

console.log("----------------------------------------------");

for(let i = 0; i < 5; i++){
    myEmmiter.emit('firstEvent', 'Hello', 'Hi');
    if(i == 2){
        myEmmiter.removeListener('firstqEvent', eventHandler)
    }
}