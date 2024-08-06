const { finished } = require('stream');
const fs = require('fs');

const writeStream = fs.createWriteStream('output.txt');
writeStream.write('Hello, ');
writeStream.write('world!\n');
writeStream.end();

// Use the finished function to wait for the writeStream to finish
finished(writeStream, (err) => {
    if (err) {
        console.error('An error occurred:', err);
    } else {
        console.log('Write stream has finished.');

        // Now, create and start the read stream
        const readStream = fs.createReadStream('output.txt');

        readStream.on('data', (chunk) => {
            console.log(chunk.toString());
        });

        readStream.on('end', () => {
            console.log('Finished reading the file.');
        });

        readStream.on('error', (err) => {
            console.error('Error occurred:', err);
        });
    }
});
