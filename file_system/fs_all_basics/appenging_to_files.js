// Appending to Files
const fs = require('fs');

// Synchronous Appending
console.log("Synchronous Appending")
fs.appendFileSync('file1.txt', ' Appended content');

// Asynchronous Appending
console.log("Asynchronous Appending")
fs.appendFile('file2.txt', ' Appended content', (err) => {
    if (err) throw err;
    console.log('Content has been appended');
});