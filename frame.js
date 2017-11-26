class Frame {
	constructor(roll1, roll2) {
	    this.roll1 = roll1;
	    this.roll2 = roll2;
	    this.total = roll1 + roll2;   
  	}

  	isStrike(){
  		return this.roll1 === 10;
  	}

  	isSpare(){
  		return this.roll1 + this.roll2 === 10;
  	}

    update(points){
      this.total = this.total + points;
      return this.total;
    }


}

module.exports = Frame;