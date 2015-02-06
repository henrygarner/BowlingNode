function Shot(frame, ball, roll, score) {
    this.frame = frame;
    this.ball = ball;
    this.roll = roll;
    this.score = score;
};

Shot.isStrike = function(roll) {
    return roll === 10;
};

Shot.prototype.isFirstBall = function() {
    return this.ball === 0;
};

Shot.prototype.isLastFrame = function() {
    return this.frame === 10;
};

Shot.prototype.next = function(roll, bonus) {
    var score = this.score + roll + bonus;
    if (this.isFirstBall() && !Shot.isStrike(roll) ||
        this.isLastFrame() &&  Shot.isStrike(roll)) {
        if (this.ball > 1) {
            throw 'Too many rolls';
        }
        return new Shot(this.frame, this.ball + 1, roll, score);
    } else {
        return new Shot(this.frame + 1, 0, roll, score);
    }
};

module.exports = Shot;
