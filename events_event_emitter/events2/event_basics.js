const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('event', () => {
    console.log('An event occurred!');
});

myEmitter.emit('event'); // Outputs: An event occurred!

