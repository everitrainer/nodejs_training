const fs = require('fs');

console.log('Start');

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File read:', data);
});

setTimeout(() => {
    console.log('Timeout 1');
}, 100);

setTimeout(() => {
    console.log('Timeout 2');
}, 0);

setImmediate(() => {
    console.log('Immediate 1');
});

setImmediate(() => {
    console.log('Immediate 2');
});

console.log('End');
