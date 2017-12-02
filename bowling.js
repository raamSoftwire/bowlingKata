const Frame = require('./frame');

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


function getFrames(rolls){

	var frames = [];

	for(var i = 0; i<rolls.length; i++){

		if(rolls[i] === 10){
			if(frames.length === 8){
				frames.push(new Frame(10,0));
				frames.push(new Frame(rolls[i+1],0));
				// console.log('clause 1');
				break;
				
			} 
			else{
				frames.push(new Frame(10,0));
				// console.log('clause 2');
			}
		}
		else{
			if(frames.length === 9 && rolls[i]+rolls[i+1] === 10){
				frames.push(new Frame (rolls[i],rolls[i+1]));
				frames.push(new Frame (rolls[i+2],0));
				// console.log('clause 3');
				break;
				
			}
			else{
				frames.push(new Frame(rolls[i],rolls[i+1]));
				i++;
				// console.log('clause 4');
			}
		}
	}

	if(frames.length === 12){
			frames.pop();
		}

	if(frames.length === 11){
		frames[10].roll2 = 0;
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





