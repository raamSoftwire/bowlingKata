const Frame = require('./frame');
const FillBall = require('./fillBall');

class Game {
	constructor(rolls) {
	    this.rolls = rolls;
  	}

	score(){

		var frames = getFrames(this.rolls);
		var fillBall = getFillBall(this.rolls);

		// var total = 0;

		// for (var i=0; i<10; i++){
		// 	total = total + frames[i].total;
		// }

		return total;
	}
}

module.exports = Game;


function getFrames(rolls){
	const frames = [];

		for (var i=0; i<20; i+=2){
			var frame = new Frame(rolls[i],rolls[i+1]);
			frames.push(frame);
		}
	return frames;
}

function getFillBall(rolls){
	if (rolls.length > 20) {
			var fillBall = new FillBall(this.rolls[20]);
		}
	else{
			var fillBall = new FillBall(0);
	}
	console.log(fillBall);
	return fillBall;
}