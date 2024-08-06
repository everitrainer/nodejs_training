try {
    let res = 10 / test;
    console.log(res)
} catch (error) {
    console.log("Exception occured : " + error)
}

const fetchData = async () => {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
};

fetchData();


fetch('https://api.example.com/data')
    .then((result) => {
        console.log(result)
    })
    .catch(error =>
        console.log(error.message)
    )


const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('error', (error) => {
    console.error('An error occurred:', error.message);
});

emitter.emit('error', new Error('Something went wrong'));

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});


// const express = require('express'); // TODO install express
// const app = express();

// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });

// app.listen(3000, () => console.log('Server is running on port 3000'));


class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError';
    }
}

try {
    throw new CustomError('This is a custom error');
} catch (error) {
    console.error(error.name, error.message);
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
}

try {
    console.log(divide(10, 0));
} catch (error) {
    console.error('Error:', error.message);
}


// const fs = require('fs').promises;

// fs.readFile('nonexistent-file.txt', 'utf8')
//     .then(data => console.log(data))
//     .catch(error => console.error('Error reading file:', error.message));

// Function that returns a rejected promise
function someAsyncFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('Something went wrong!'));
        }, 1000);
    });
}

// Global handler for unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason.message);
    // Application specific logging, throwing an error, or other logic here
});

// Call the function and do not handle the rejection
someAsyncFunction();

console.log('This will print before the error is handled');