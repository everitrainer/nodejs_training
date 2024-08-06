const fs = require('fs');

const readableStream = fs.createReadStream('blog_post.txt', 'utf8');

readableStream.on('data', (chunk) => {
    console.log('New chunk received:');
    console.log(chunk);
});

readableStream.on('end', () => {
    console.log('No more data.');
});
