// Try...Catch Block
// Used to handle synchronous code exceptions

try {
    // Code that may throw an exception
    let result = riskyOperation();
    console.log(result);
} catch (error) {
    // Handle the exception
    console.error('An error occurred:', error);
}

// Using Callbacks
// Handling errors in asynchronous operations using callbacks.

const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        // Handle the error
        console.error('Error reading file:', err);
        return;
    }
    console.log(data);
});

//  Promises and.catch()
// Handling errors in asynchronous operations using promises

const fs_promises = require('fs').promises;

fs_promises.readFile('example.txt', 'utf8')
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        // Handle the error
        console.error('Error reading file: promise', err);
    });

// Async / Await with Try...Catch
// Handling errors in asynchronous operations using async/await

async function readFile() {
    try {
        const data = await fs_promises.readFile('example.txt', 'utf8');
        console.log(data);
    } catch (err) {
        // Handle the error
        console.error('Error reading file: async', err);
    }
}

readFile();

// EventEmitter Error Handling
// Handling errors using EventEmitter in Node.js.

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('error', (err) => {
    // Handle the error
    console.error('An error occurred: event emitter ', err);
});

eventEmitter.emit('error', new Error('Something went wrong'));


// Process - Level Error Handling
// Handling uncaught exceptions and unhandled promise rejections globally.

// Uncaught Exceptions:

process.on('uncaughtException', (err) => {
    // Handle the error
    console.error('Uncaught exception:', err);
    // Optionally shut down the process
    process.exit(1);
});

// Example that will cause an uncaught exception
setTimeout(() => {
    throw new Error('Oops!');
}, 1000);

// Unhandled Promise Rejections:

process.on('unhandledRejection', (reason, promise) => {
    // Handle the error
    console.error('Unhandled rejection:', reason);
    // Optionally shut down the process
    process.exit(1);
});

// Example that will cause an unhandled rejection
Promise.reject(new Error('Oops!'));
