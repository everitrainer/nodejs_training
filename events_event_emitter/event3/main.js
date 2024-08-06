const CustomEventEmitter = require('./customEventEmitter');

const myEmitter = new CustomEventEmitter();

// Listener for the 'score' event
function onScore(score) {
    console.log(`Score updated: ${score}`);
}

// Listener for the 'end' event
function onEnd(finalScore) {
    console.log(`Game over! Final score: ${finalScore}`);
}

// Register listeners
myEmitter.on('score', onScore);
myEmitter.on('end', onEnd);

// Emit events
myEmitter.emit('score', 10);  // Outputs: Score updated: 10
myEmitter.emit('score', 20);  // Outputs: Score updated: 20
myEmitter.emit('end', 30);    // Outputs: Game over! Final score: 30

// Remove a listener and emit again
myEmitter.off('score', onScore);
myEmitter.emit('score', 40);  // No output, as listener is removed
