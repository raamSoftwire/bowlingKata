const Frame = require('./frame');

class Game {
	constructor(rolls) {
	    this.rolls = rolls;
  	}

	score(){

		var frames = getFrames(this.rolls);

		var simpleTotal = getSimpleTotal(frames);

		var spareBonus = accountForSpares(frames);
		
		displayResults(this.rolls, simpleTotal, spareBonus);
		return simpleTotal + spareBonus;

		// return simpleTotal;
	}
}

module.exports = Game;


function getFrames(rolls){
	//only gets 10 frames
	//ignores fillBall scenario
	const frames = [];

		var i = 0 ;

		while(i < 9){

			for (var j=0; j<20; j+=2){
				if(rolls[j]==10){
					frames.push(new Frame(10,0));
					i++;
				}
				else{
					frames.push(new Frame(rolls[j],rolls[j+1]));
					i++;
				}
			}
		}

	return frames;
}

function getSimpleTotal(frames){
	var total = 0;

		for(var i=0; i<frames.length; i++){

			total = total + frames[i].total;
		}

		return total;
}

function accountForSpares(frames){
	//only checks first 9 frames
	//ignores fillBall scenario

	var spareBonus = 0;

	for(var i=0; i<9; i++){
		if(frames[i].roll1 + frames[i].roll2 === 10){
			spareBonus = frames[i+1].roll1;
		}
	}

	return spareBonus;
}

function displayResults(rolls,simpleTotal,spareBonus){
	console.log(
		'Rolls: \t'+ rolls + 
		'\nSimple Total: \t' + simpleTotal +
		'\nSpare Bonus: \t' + spareBonus);
}


