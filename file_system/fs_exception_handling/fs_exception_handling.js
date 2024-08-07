// Try...Catch Block
// Used to handle synchronous code exceptions

// try {
//     // Code that may throw an exception
//     let result = riskyOperation();
//     console.log(result);
// } catch (error) {
//     // Handle the exception
//     console.error('An error occurred:', error);
// }

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