const Bowling = require('./bowling');

var rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 7, 1];

var game = new Bowling(rolls);

game.displayFrames();

game.displayResults();

var score = game.score();

// console.log(score);