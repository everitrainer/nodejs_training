// Working with Directories
const fs = require('fs');

// Creating Directories
// Synchronous Creation
// fs.mkdirSync('exampleDir1');

// Asynchronous Creation
// fs.mkdir('exampleDir2', (err) => {
//     if (err) throw err;
//     console.log('Directory has been created');
// });


// Reading Directories
// Synchronous Reading
// const files = fs.readdirSync('exampleDir1');
// console.log(files);

// // Asynchronous Reading
// fs.readdir('exampleDir2', (err, files) => {
//     if (err) throw err;
//     console.log(files);
// });

// Deleting Directories
// Synchronous Deleting
fs.rmdirSync('exampleDir1');

// Asynchronous Deleting
fs.rmdir('exampleDir2', (err) => {
    if (err) throw err;
    console.log('Directory has been deleted');
});