const chai = require ('chai');
const { prototype } = require('mocha');
const { prototypeData } = require('../src/data');
const expect = chai.expect;

const Round = require('../src/Round')
const Card = require('../src/Card')
const Turn = require('../src/Turn')
const Deck = require('../src/Deck')
describe('Round', function() {
    let card1;
    let card5;
    let card21;
    let round;
    let deck;

  beforeEach(() => {
    card1 = new Card(1,"What allows you to define a set of related information using key-value pairs?",["object", "array", "function"], "object")
    card5 = new Card(5, "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?", ["mutator method", "accessor method", "iteration method"], "iteration method")
    card21 = new Card(21, "Which iteration method is best for DOM manipulation?", ["forEach()", "map()", "reduce()"], "forEach()")
    round = new Round([card1, card5, card21])
    deck = new Deck([card1, card5, card21])
});
    
    it('should be and instance of Round', function() {
        const round = new Round(deck);

    expect(round).to.be.an.instanceOf(Round)
    });

    it('should update the turn count', function() {

        expect(round.turns).to.equal(0)
    });

    it('should update the turns', function() {
        round.takeTurn('mutator method')
        expect(round.turns).to.equal(1)
    });

    it('should evaluate guess and push inccorect guesses to an array', function() {
        round.takeTurn('mutator method')
        expect(round.incorrectGuesses).to.deep.equal([1])
    });

    it('should give feedback if its correct or incorrect', function() {
        round.takeTurn('mutator method')
        expect(round.takeTurn()).to.equal("Incorrect!")
    });

    it('should calculate the percent of correct answers', function() {
        round.takeTurn('function')
        expect(round.calculatePercentCorrect()).to.equal(0)
    });

    it('should end round after thirty turns', function() {
        for (let i = 0; i < 30; i++) {
            round.takeTurn('function')
        }
        expect(round.turns).to.equal(30) 
    });
});