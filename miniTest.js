const Game = require('./game');

var rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 7, 1];

var game = new Game(rolls);

game.displayFrames();

game.displayResults();

var score = game.score();

// console.log(score);