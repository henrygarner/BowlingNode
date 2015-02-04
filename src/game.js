var Shot = require('./shot');

function Game() {};

Game._bonus = function(previousRoll, shot, roll, rolls) {
    if (shot.isStrike(roll) && shot.frame < 9) {
        return rolls[1] + rolls[2]; // Strike
    } else if (previousRoll + roll === 10 && shot.ball === 1) {
        return rolls[1]; // Spare
    }
    return 0;
};

Game._scorer = function(previousRoll, shot, score, rolls) {
    var roll = rolls[0];
    if (roll === undefined) {
        return score;
    } else {
        var bonus = this._bonus(previousRoll, shot, roll, rolls);
        return this._scorer(roll,
                            shot.next(roll),
                            score + roll + bonus,
                            rolls.slice(1));
    }
};

Game.score = function() {
    var init = new Shot(0, 0);
    return this._scorer(0, init, 0, [].slice.call(arguments));
};

module.exports = Game;
