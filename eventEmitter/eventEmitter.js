const Emitter = require('events')

const eventEmitter = new Emitter()

let count = 0;

eventEmitter.on('firstEvent', (count) => {
    console.log("Event triggered "+ count)
})

const interval = setInterval(() => {
    if(count === 5){
        clearInterval(interval)
    }else{
        count++;
        eventEmitter.emit('firstEvent',count)
    }
}, 2000)

eventEmitter.emit('firstEvent',1000)