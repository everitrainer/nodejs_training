// Handling File Events

const fs = require('fs');
const EventEmitter = require('events');

class FileMonitor extends EventEmitter {
    constructor(filePath) {
        super();
        this.filePath = filePath;
        this.watchFile();
    }

    watchFile() {
        fs.watchFile(this.filePath, (curr, prev) => {
            console.log(`File changed: ${this.filePath}`);
            this.emit('change', { curr, prev });
        });
    }
}

const fileMonitor = new FileMonitor('./example.txt');

fileMonitor.on('change', (info) => {
    console.log(new Date())
    console.log('File change detected:', info);
});
