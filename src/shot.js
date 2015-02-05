function Shot(frame, ball, roll) {
    this.frame = frame;
    this.ball = ball;
    this.roll = roll;
};

Shot.isStrike = function(roll) {
    return roll === 10;
};

Shot.prototype.isFirstBall = function() {
    return this.ball === 0;
}

Shot.prototype.isLastFrame = function() {
    return this.frame === 10;
}

Shot.prototype.next = function(roll) {
    if (this.isFirstBall() && !Shot.isStrike(roll) ||
        this.isLastFrame() &&  Shot.isStrike(roll)) {
        if (this.ball > 1) {
            throw 'Too many rolls';
        }
        return new Shot(this.frame, this.ball + 1, roll);
    } else {
        return new Shot(this.frame + 1, 0, roll);
    }
};

module.exports = Shot;
