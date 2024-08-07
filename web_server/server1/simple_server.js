const http = require('http');
let counter = 0;
const cb = (req, res) => {
    console.log("Total Hits ", ++counter)
    res.write("Hello World.!")
    res.end();
}
const server = http.createServer(cb)

const serverListener = () => { console.log("server started") }
server.listen(4000, serverListener)