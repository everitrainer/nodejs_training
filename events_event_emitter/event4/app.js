const Game = require('./game');

const myGame = new Game();

// Listener for the 'score' event
myGame.on('score', (currentScore) => {
    console.log(`Player scored! Current score: ${currentScore}`);
});

// Listener for the 'end' event
myGame.on('end', (finalScore) => {
    console.log(`Game over! Final score: ${finalScore}`);
});

// Simulating the game
myGame.addPoints(10);  // Player scores 10 points
myGame.addPoints(20);  // Player scores 20 points
myGame.endGame();      // End the game
