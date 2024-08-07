// Asynchronous HTTP Requests
const http = require('http');
const EventEmitter = require('events');

class RequestHandler extends EventEmitter {
    count = 0;
    constructor() {
        super();
        this.on('request', this.handleRequest);
    }

    handleRequest(req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, World! ' + this.count++ + '\n');
    }
}

const requestHandler = new RequestHandler();

const server = http.createServer((req, res) => {
    requestHandler.emit('request', req, res);
});

server.listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000/');
});
