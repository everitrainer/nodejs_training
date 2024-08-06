// Event - Driven Messaging System

const EventEmitter = require('events');

class MessagingSystem extends EventEmitter {
    sendMessage(message) {
        console.log(`Message sent: ${message}`);
        this.emit('message', message);
    }
}

const messagingSystem = new MessagingSystem();

messagingSystem.on('message', (msg) => {
    console.log(`Received message: ${msg}`);
});

messagingSystem.sendMessage('Hello from Node.js!');
