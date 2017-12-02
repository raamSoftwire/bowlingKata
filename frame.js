class Frame {
	constructor(roll1, roll2) {
	    this.roll1 = roll1;
	    this.roll2 = roll2;
	    this.total = roll1 + roll2;
      this.isStrike = this.roll1 === 10;
      this.isSpare = this.roll1 + this.roll2 === 10 && this.roll1 !== 10;
  	}
}

module.exports = Frame;