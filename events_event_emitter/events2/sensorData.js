// Real - Time Data Processing

const EventEmitter = require('events');

class Sensor extends EventEmitter {
    start() {
        setInterval(() => {
            const temperature = Math.random() * 100;
            this.emit('data', temperature);
        }, 1000);
    }
}

const sensor = new Sensor();

sensor.on('data', (temp) => {
    console.log(`Temperature reading: ${temp.toFixed(2)}°C`);
});

sensor.start();
