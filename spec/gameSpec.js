var Game = require('../src/game');

describe('Game', function() {
    it ('has a zero score by default', function() {
        expect(Game.score()).toEqual(0);
    });
    it ('keeps score', function() {
        expect(Game.score(5)).toEqual(5);
    });
    it ('keeps incremental score', function() {
        expect(Game.score(5,1)).toEqual(6);
    });
    it ('awards a bonus for a spare', function() {
        expect(Game.score(7,3,4,2)).toEqual(20)
    });
    it ('awards a bonus for two spares', function() {
        expect(Game.score(7,3,4,6,2)).toEqual(28);
    });
    it ('does not award a bonus if pins left standing', function() {
        expect(Game.score(2,5,5,2)).toEqual(14);
    });
    it ('awards a bonus for a strike', function() {
        expect(Game.score(10,3,6)).toEqual(28);
    });
    it ('awards two bonuses for a double', function() {
        expect(Game.score(10,10,9,0)).toEqual(57);
    });
    it ('awards three bonuses for a turkey', function() {
        expect(Game.score(10,10,10,0,9)).toEqual(78);
    });
    it ('returns 300 for a perfect game', function() {
        expect(Game.score(10,10,10,10,10,10,10,10,10,10,10,10)).toEqual(300);
    });
    it ('errors if we roll too many', function() {
        expect(function() {
            Game.score(10,10,10,10,10,10,10,10,10,10,10,10,10);
        }).toThrow(new Error('Too many rolls'));
    });
});
