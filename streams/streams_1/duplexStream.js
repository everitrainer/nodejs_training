const { Duplex } = require('stream');

const duplexStream = new Duplex({
    read(size) {
        this.push('This is a duplex stream1.\n');
        this.push('This is a duplex stream2.\n');
        this.push('This is a duplex stream3.\n');
        this.push(null); // Indicates the end of data
    },
    write(chunk, encoding, callback) {
        console.log(chunk.toString());
        callback();
    }
});

duplexStream.on('data', (chunk) => {
    console.log('Readable side:', chunk.toString());
});

duplexStream.on('end', () => {
    console.log('End');
});
duplexStream.write('Writing to duplex stream.1');
duplexStream.write('Writing to duplex stream.2');
duplexStream.write('Writing to duplex stream.3');
duplexStream.end();

