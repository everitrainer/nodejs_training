const { Transform } = require('stream');

const commaSplitter = new Transform({
    readableObjectMode: true,

    transform(chunk, encoding, callback) {

        this.push(chunk.toString().trim().split(','));
        callback();
    }
});

const arrayToObject = new Transform({
    readableObjectMode: true,
    writableObjectMode: true,

    transform(chunk, encoding, callback) {

        const obj = {};
        for (let i = 0; i < chunk.length; i += 2) {
            obj[chunk[i]] = chunk[i + 1];
        }
        this.push(obj);
        callback();
    }
});

const objectToString = new Transform({
    writableObjectMode: true,

    transform(chunk, encoding, callback) {

        this.push(JSON.stringify(chunk) + '\n');
        callback();
    }
});


// Custom function to log the names or types of the streams
function logPipe(stream, name) {
    console.log(`Piping to: ${name}`);
    return stream;
}

// Wrap the pipeline to log the names or types of the streams
process.stdin
    .pipe(logPipe(commaSplitter, 'commaSplitter'))
    .pipe(logPipe(arrayToObject, 'arrayToObject'))
    .pipe(logPipe(objectToString, 'objectToString'))
    .pipe(logPipe(process.stdout, 'process.stdout'));

