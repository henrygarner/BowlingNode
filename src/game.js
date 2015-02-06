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

Game._scorer = function(previousShot, rolls) {
    var roll = rolls[0];
    if (roll === undefined) {
        return previousShot.score;
    } else {
        var bonus = this._bonus(previousShot, roll, rolls);
        return this._scorer(previousShot.next(roll, bonus),
                            rolls.slice(1));
    }
};

Game.score = function() {
    var init = new Shot(0, 0, 0, 0);
    return this._scorer(init, [].slice.call(arguments));
};

module.exports = Game;
