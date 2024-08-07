// Reading Files
const fs = require('fs');

// Synchronous Reading
// This method blocks the execution until the file is read completely.
console.log("Synchronous Reading")
const data = fs.readFileSync('movies_list.txt', 'utf8');
console.log(data);

// Asynchronous Reading
// This method reads the file without blocking the execution of the code.
console.log("\nAsynchronous Reading")
fs.readFile('movies_list.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// Reading Files Using Streams
// For reading large files efficiently, you can use streams.
console.log("\nReading Files Using Streams")
const readStream = fs.createReadStream('movies_list.txt', 'utf8');
readStream.on('data', (chunk) => {
    console.log(chunk);
});

