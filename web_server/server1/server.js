var http = require("http")
var data = require("./data")
const cb = (req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" })
    // res.write(JSON.stringify({ "name": "Lakshmikant" }));
    res.write(JSON.stringify(data));
    res.end();
}

http.createServer(cb).listen(4000)