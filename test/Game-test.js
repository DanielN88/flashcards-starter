const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Card')

describe('Game', function() {

    it('should be a function', function() {
        const game = new Game();

        expect(Game).to.be.a('function')
    });

    it('should be an instance', function() {
        const game = new Game();

        expect(game).to.be.an.instanceOf(Game)
    });
});


