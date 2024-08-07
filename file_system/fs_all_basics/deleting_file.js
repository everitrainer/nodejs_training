// Deleting Files
const fs = require('fs');

// Synchronous Deleting
console.log("Synchronous Deleting")
fs.unlinkSync('file1.txt');

// Asynchronous Deleting
console.log("Asynchronous Deleting")
fs.unlink('file2.txt', (err) => {
    if (err) throw err;
    console.log('File has been deleted');
});
