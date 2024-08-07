// Watching Files and Directories
const fs = require('fs');

// Watch a File
fs.watch('movies_list.txt', (eventType, filename) => {
    console.log(`File ${filename} has been changed: ${eventType}`);
});

// Watch a Directory
fs.watch('movies', (eventType, filename) => {
    console.log(`File ${filename} in directory has been changed: ${eventType}`);
});

// File and Directory Statistics
// Synchronous Stats

const stats = fs.statSync('movies_list.txt');
console.log(stats);

// Asynchronous Stats
fs.stat('movies_list.txt', (err, stats) => {
    if (err) throw err;
    console.log(stats);
});

// Copying Files
// Synchronous Copying
fs.copyFileSync('movies_list.txt', 'movies_list_copy1.txt');

// Asynchronous Copying
fs.copyFile('movies_list.txt', 'movies_list_copy2.txt', (err) => {
    if (err) throw err;
    console.log('File has been copied');
});

// Renaming Files and Directories
// Synchronous Renaming
fs.renameSync('movies_list_copy1.txt', 'movies_list_renamed1.txt');

// Asynchronous Renaming
fs.rename('movies_list_copy2.txt', 'movies_list_renamed2.txt', (err) => {
    if (err) throw err;
    console.log('File has been renamed');
});