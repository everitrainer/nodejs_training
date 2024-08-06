const EventEmitter = require('events');

class Game extends EventEmitter {
    constructor() {
        super();
        this.score = 0;
    }

    // Method to add points to the score
    addPoints(points) {
        this.score += points;
        this.emit('score', this.score); // Emit the 'score' event with the current score
    }

    // Method to end the game
    endGame() {
        this.emit('end', this.score); // Emit the 'end' event with the final score
    }
}

module.exports = Game;
