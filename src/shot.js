function Shot(frame, ball) {
    this.frame = frame;
    this.ball = ball;
};

Shot.prototype.isSpare = function(roll) {
    return this.ball === 0 && roll != 10;
};

Shot.prototype.isStrike = function(roll) {
    return roll === 10;
};

Shot.prototype.next = function(roll) {
    if (this.isSpare(roll) ||
        this.frame === 10 && roll === 10) {
        if (this.ball > 1) {
            throw 'Too many rolls';
        }
        return new Shot(this.frame, this.ball + 1);
    } else {
        return new Shot(this.frame + 1, 0);
    }
};

module.exports = Shot;
