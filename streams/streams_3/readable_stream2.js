const fs = require('fs');
const sharp = require('sharp');

// Read the original image file using a readable stream
const input = fs.createReadStream('istockphoto.webp');
const output = fs.createWriteStream('small-image.jpg');

input.pipe(sharp().resize(300, 300)).pipe(output);

console.log('Image resized and saved as small-image.jpg');
