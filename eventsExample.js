const { EventEmitter } = require('events');

class Kettle extends EventEmitter{
    constructor(){
        super();

        setImmediate(() => {
            this.emit('created', {});
        });
        

    }
    start(){
        this.emit('started', {});  
        setTimeout(() => {
            this.emit('ready', {});
        }, 3000);  
    }
}

const k = new Kettle();
k.start();
k.on('ready', () => {
    console.log('Чайник создан');
})

k.on('ready', () => {
    console.log('Чайник включен');
})

k.on('ready', () => {
    console.log('Чайник скипел');
})