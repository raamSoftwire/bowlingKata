const Frame = require('./frame');
const FinalFrame = require('./finalFrame');

class ScoreCard {
	constructor(frames, finalFrame) {
	    this.frames = frames;
	    this.finalFrame = finalFrame;
  	}

  	score(){
  		var simpleTotal = getSimpleTotal(this.frames) + this.finalFrame.total

		// var spareBonus = accountForSpares(this.frames);
		// var strikeBonus = accountForStrikes(this.frames);

		return simpleTotal; //+ spareBonus+ strikeBonus;
  	}

}

module.exports = ScoreCard;


function getSimpleTotal(frames){
	var total = 0;

	for(var i=0; i<9; i++){//only first 9 frames

		total += frames[i].total;
	}
	return total;
}

function accountForSpares(frames){
	var spareBonus = 0;

	for(var i=0; i<9; i++){
		if(frames[i].isSpare){
			spareBonus += frames[i+1].roll1;
		}
	}
	return spareBonus;
}

function accountForStrikes(frames){
	var strikeBonus = 0;

	for(var i=0; i<9; i++){

		if(frames[i].isStrike){
			if(frames[i+1].isStrike){
				strikeBonus += frames[i+1].roll1 + frames[i+2].roll1;
			}
			else{
				strikeBonus +=  frames[i+1].roll1 + frames[i+1].roll2;
			}
		}
	}
	return strikeBonus;
}