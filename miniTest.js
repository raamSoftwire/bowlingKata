const Game = require('./game');

var rolls = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];

var game = new Game(rolls);

displayFrames(game.scoreCard.frames);
displayFinalFrame(game.scoreCard.finalFrame);

console.log(game.scoreCard.score());





function displayFrames(frames){
	for(var i in frames){
		console.log(i);
		console.log(frames[i]);
	}
}

function displayFinalFrame(finalFrame){
	console.log(finalFrame);
}

function displayResults(){
	console.log(
		'Rolls: \t'+ this.rolls + '\n '+ 
		getSimpleTotal(this.frames) + ' ' + 
		accountForSpares(this.frames)  + ' ' + 
		accountForStrikes(this.frames));
	}