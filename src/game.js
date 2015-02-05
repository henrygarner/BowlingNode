var Shot = require('./shot');

function Game() {};

Game._bonus = function(previousShot, roll, rolls) {
    if (Shot.isStrike(roll) && previousShot.frame < 9) {
        return rolls[1] + rolls[2]; // Strike
    } else if (previousShot.roll + roll === 10 && !previousShot.isFirstBall()) {
        return rolls[1]; // Spare
    }
    return 0;
};

Game._scorer = function(score, previousShot, rolls) {
    var roll = rolls[0];
    if (roll === undefined) {
        return score;
    } else {
        var bonus = this._bonus(previousShot, roll, rolls);
        return this._scorer(score + roll + bonus,
                            previousShot.next(roll),
                            rolls.slice(1));
    }
};

Game.score = function() {
    var init = new Shot(0, 0, 0);
    return this._scorer(0, init, [].slice.call(arguments));
};

module.exports = Game;
