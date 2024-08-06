// Allocate a buffer of 10 bytes
const buf1 = Buffer.alloc(10);
console.log(buf1); // <Buffer 00 00 00 00 00 00 00 00 00 00>

const buf2 = Buffer.from('Hello, world!');
console.log(buf2.toString('utf8')); // 'Hello, world!'
console.log(buf2.toString()); // Output: Hello, world!
console.log(buf2.toString('hex')); // '48656c6c6f2c20776f726c6421'
console.log(buf2.toString('base64')); // 'SGVsbG8sIHdvcmxkIQ=='

const buf3 = Buffer.from([1, 2, 3]);
console.log(buf3); // <Buffer 01 02 03>

const buf4 = Buffer.alloc(10);
buf4.write('Hello');
console.log(buf4); // <Buffer 48 65 6c 6c 6f 00 00 00 00 00>


// // Using Buffers in Real - Time Examples

const fs = require('fs');

fs.readFile('js_content.txt', (err, data) => {
    if (err) throw err;
    console.log('File data:', data.toString());
});

// // Writing a File with Buffers

const buf = Buffer.from('Hello, world!');
fs.writeFile('output.txt', buf, (err) => {
    if (err) throw err;
    console.log('File written successfully');
});

