const fs = require("fs")
const path = require("path")
const dirPath = path.join(__dirname, "/crud")
const filePath = `${dirPath}/js_tut.txt`
fs.writeFileSync(filePath, "This is JS training");

// fs.appendFile(filePath, "Added lines", (err) => {
//     if (!err) console.log("File got updated")
// })

// fs.readFile(filePath, 'utf-8', (err, item) => {
//     console.log(item);
// })

// const updatedFilePath = `${dirPath}/js_update.txt`
// fs.rename(filePath, updatedFilePath, (err) => {
//     if (!err) console.log("File got renamed")
// })

// fs.readFile(updatedFilePath, 'utf-8', (err, item) => {
//     console.log(item);
// })

// fs.unlinkSync(updatedFilePath)

// fs.mkdirSync("test_dir")

// fs.mkdir("test_dir2", (err) => {
//     console.log("Directory created")
// });