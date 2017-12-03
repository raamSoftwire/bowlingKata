const ScoreCard = require('./scoreCard');
const Frame = require('./frame');
const FinalFrame = require('./finalFrame');

class Game {
	constructor(rolls) {
		this.scoreCard = getScoreCard(rolls);
  	}

	score(){
		return this.scoreCard.score();
	}
}

module.exports = Game;


function getScoreCard(rolls){
	var frames = [];
	var ballNo = 0;

	while(frames.length< 9){ //gives first 9 frames, deal with 10th separately

		if(rolls[ballNo] === 10){
			frames.push(new Frame(10,0));
			ballNo++;
		}

		else {
			frames.push(new Frame(rolls[ballNo],rolls[ballNo + 1]));
			ballNo += 2;
		}
	}

	finalFrame = new FinalFrame(rolls[ballNo], rolls[ballNo + 1], rolls[ballNo + 2]);

	return new ScoreCard(frames,finalFrame);
}








