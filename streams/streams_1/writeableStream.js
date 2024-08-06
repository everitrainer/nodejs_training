const fs = require('fs');

const writableStream = fs.createWriteStream('create_post.txt');

writableStream.write('Hello, world!\n');
writableStream.write('This is a writable stream example.\n');

writableStream.end(() => {
    console.log('Finished writing data.');
});
