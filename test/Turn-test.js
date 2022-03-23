const chai = require ('chai');
const { prototype } = require('mocha');
const { prototypeData } = require('../src/data');
const expect = chai.expect;

const Turn = require('../src/Turn')
const Card = require('../src/Card')

describe('Turn', function() {

    it('should be a function', function() {
        const turn = new Turn();

        expect(Turn).to.be.a('function')
    });

    it('should be an instance of Turn', function() {
        const turn = new Turn();

        expect(turn).to.be.an.instanceof(Turn)
    });

    it('should return a guess', function() {
        const turn = new Turn('object', new Card)

        expect(turn.returnGuess()).to.equal(turn.userGuess);
    });

    it('should return a card', function() {
        const turn = new Turn('object', new Card)

        expect(turn.card).to.be.an.instanceOf(Card);
    });

    it('should return card', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('object', card)

        expect(turn.returnCard()).to.equal(turn.card)
    });

    it('should return true', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('object', card)

        expect(turn.evaluateGuess()).to.equal(true)
    });

    it('should return false', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('array', card)

        expect(turn.evaluateGuess()).to.equal(false)
    });

    it('should return the correct answer', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('object', card)

        expect(turn.giveFeedback()).to.equal("Correct!")
    });

    it('should return the incorrect answer', function() {
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('array', card)

        expect(turn.giveFeedback()).to.equal("Incorrect!")
    });
});