const path = require("path")

let baseName = path.basename("/Users/lakshmikant/Desktop/Trainings/nodejs_training");

console.log("BaseName is : ", baseName)

// console.log("delimiter : ", path.delimiter)
console.log("env path : ", process.env.PATH)

let dirName = path.dirname(`${baseName}/path.js`)
console.log(dirName)

let extName = path.extname(`${baseName}/path.js`)
console.log(extName)

console.log(process.env.PATH.split(path.delimiter))

console.log(path.posix.basename('/tmp/myfile.html'))


console.log(path.basename('/foo/bar/baz/asdf/quux.html'));
// Returns: 'quux.html'

console.log(path.basename('/foo/bar/baz/asdf/quux.html', '.html'));
// // Returns: 'quux'