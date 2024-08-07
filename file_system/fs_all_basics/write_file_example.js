// Writing Files
const fs = require('fs');

// Synchronous Writing
// This method blocks the execution until the file is written completely.
console.log("Synchronous Writing")
fs.writeFileSync('file1.txt', 'Hello Mangaluru!');

// Asynchronous Writing
// This method writes the file without blocking the execution of the code.
console.log("Asynchronous Writing")
fs.writeFile('file2.txt', 'Hello Karnataka!', (err) => {
    if (err) throw err;
    console.log('File has been written');
});

// Writing Files Using Streams
// For writing large files efficiently, you can use streams.
console.log("Writing Files Using Streams")
const writeStream = fs.createWriteStream('file3.txt');
writeStream.write('Hello, Bengaluru!');
writeStream.end();