const EventEmitter = require('events');

const myEmitter = new EventEmitter();

const listener1 = () => console.log('Listener 1');
const listener2 = () => console.log('Listener 2');

myEmitter.on('event', listener1);
myEmitter.on('event', listener2);

console.log(myEmitter.listenerCount('event')); // Outputs: 2

myEmitter.removeListener('event', listener1);

console.log(myEmitter.listenerCount('event')); // Outputs: 1
