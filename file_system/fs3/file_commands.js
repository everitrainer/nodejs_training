const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "files")
// console.log(dirPath)
try {
    fs.mkdirSync(dirPath, () => { })
} catch (err) {
    console.log(err.message)
}

for (let i = 0; i < 5; i++) {
    // fs.writeFileSync(`files/input${i}.txt`, "Dummy Data");
    // fs.writeFileSync(`${dirPath}/input${i}.txt`, "Dummy Data");
    // fs.unlinkSync(`files/input${i}.txt`);
    // fs.unlinkSync(`${dirPath}/input${i}.txt`);
}

fs.readdir(dirPath, (err, files) => {
    files.forEach(item => console.warn(item))
})