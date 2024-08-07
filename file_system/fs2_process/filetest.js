// console.log(process.argv) // run -> node filetest.js

// console.log(parseInt(process.argv[2]) + parseInt(process.argv[3])) // run -> node filetest.js 100 200

var fs = require("fs")

var input = process.argv;
if (input[2] == "add") { // run -> node filetest.js add data.txt "This is data"
    fs.writeFileSync(input[3], input[4]);
} else if (input[2] == "remove") { // run -> node filetest.js remove data.txt
    fs.unlinkSync(input[3])
} else {
    console.log("Invalid Input")
}