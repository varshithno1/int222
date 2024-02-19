const Emiter = require('events');
const myEmmiter = new Emiter();

const eventHandler = (arg1, arg2) => {
    console.log('Event occoucerd with args: ', arg1, arg2);
}

myEmmiter.on('firstEmiter', eventHandler);

for(let i = 0; i < 5; i++){
    myEmmiter.emit('firstEvent', 'Hello', 'Hi');
    if(i == 2){
        myEmmiter.removeListener('firstqEvent', eventHandler)
    }
}