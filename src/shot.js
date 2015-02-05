function Shot(frame, ball, roll) {
    this.frame = frame;
    this.ball = ball;
    this.roll = roll;
};

Shot.isStrike = function(roll) {
    return roll === 10;
};

Shot.prototype.next = function(roll) {
    if (this.ball === 0 && !Shot.isStrike(roll) ||
        this.frame === 10 && roll === 10) {
        if (this.ball > 1) {
            throw 'Too many rolls';
        }
        return new Shot(this.frame, this.ball + 1, roll);
    } else {
        return new Shot(this.frame + 1, 0, roll);
    }
};

module.exports = Shot;
