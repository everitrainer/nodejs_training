// Error Handling with Events

const EventEmitter = require('events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();

// console.log(myEmitter)
const test = myEmitter.on('error', (err) => {
    console.error('Error occurred:', err.message);
});

console.log(test === myEmitter)
const temp = myEmitter.emit('error', new Error('Something went wrong!'));
console.log(temp)
