var fs = require("fs")

console.log("File System")

fs.writeFileSync("input.txt", "Welcome to world.!")

console.log("-->>", __dirname)
console.log("-->>", __filename)
