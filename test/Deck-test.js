const chai = require('chai');
const { prototype } = require('mocha');
const { prototypeData } = require('../src/data');
const expect = chai.expect;

const Deck = require('../src/Deck')
const Card = require('../src/Card')

describe('Deck', function() {

    it('should be an instance of Deck', function() {
        const deck = new Deck()

        expect(deck).to.be.an.instanceof(Deck)
    });

    it('should be an array', function() {
        card1 = new Card(1,"What allows you to define a set of related information using key-value pairs?",["object", "array", "function"], "object")
        card5 = new Card(5, "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?", ["mutator method", "accessor method", "iteration method"], "iteration method")
        card21 = new Card(21, "Which iteration method is best for DOM manipulation?", ["forEach()", "map()", "reduce()"], "forEach()")
        const deck = new Deck([card1, card5, card21]) 

        expect(deck.cards).to.be.an.instanceof(Array)
    });

    it('should count the length of the deck', function() {
        card1 = new Card(1,"What allows you to define a set of related information using key-value pairs?",["object", "array", "function"], "object")
        card5 = new Card(5, "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?", ["mutator method", "accessor method", "iteration method"], "iteration method")
        card21 = new Card(21, "Which iteration method is best for DOM manipulation?", ["forEach()", "map()", "reduce()"], "forEach()")
        const deck = new Deck([card1, card5, card21]) 

        expect(deck.countCards()).to.equal(3)
    });
});