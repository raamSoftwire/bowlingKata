const ScoreCard = require('./scoreCard');

class Game {
	constructor(rolls) {
		this.scoreCard = getScoreCard(rolls);
  	}

	score(){
		this.scoreCard.score();
	}

	 //displayResults(){
	// console.log(
	// 	'Rolls: \t'+ this.rolls + '\n '+ 
	// 	getSimpleTotal(this.frames) + ' ' + 
	// 	accountForSpares(this.frames)  + ' ' + 
	// 	accountForStrikes(this.frames));
	// }
  	

  	// displayFrames(){
  	// 	for(var i in this.frames){
  	// 		console.log(i);
  	// 		console.log(this.frames[i]);
  	// 	}
  	// }
}

module.exports = Game;



function getScoreCard(rolls){

	frames = getFrames(rolls);

	finalFrame = getFinal

	return new ScoreCard (frames, finalFrame)
}

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








