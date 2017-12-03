const ScoreCard = require('./scoreCard');

class Game {
	constructor(rolls) {
	    this.rolls = rolls;
	    this.frames = getFrames(rolls);
	   
  	}

  	displayResults(){
	console.log(
		'Rolls: \t'+ this.rolls + '\n '+ 
		getSimpleTotal(this.frames) + ' ' + 
		accountForSpares(this.frames)  + ' ' + 
		accountForStrikes(this.frames));
	}
  	

  	displayFrames(){
  		for(var i in this.frames){
  			console.log(i);
  			console.log(this.frames[i]);
  		}
  	}

	score(){
		var simpleTotal = getSimpleTotal(this.frames);
		var spareBonus = accountForSpares(this.frames);
		var strikeBonus = accountForStrikes(this.frames);
		return simpleTotal + spareBonus+ strikeBonus;
	}
}

module.exports = Game;




function getFrames2(rolls){
	var frames = [];
	var ballNo = 0;

	while(frames.length<10){//gives first 9 frames, deal with 10th separately

		if(rolls[ballNo] === 10){
			frames.push(new Frame(10,0));
			ballNo++;
		}

		else {
			frames.push(new Frame(rolls[ballNo],rolls[ballNo + 1]));
			ballNo += 2;
		}
	}
	return frames;
}


function getSimpleTotal(frames){
	var total = 0;

	for(var i=0; i<frames.length; i++){

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





