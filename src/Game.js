const Card = require('./Card');
const Round = require('./Round');
const Deck = require('./Deck')
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound
  }

  start() {
   const cards = []

   prototypeQuestions.forEach(card => {
    let newCard = new Card(card.id, card.question, card.answers, card.correctAnswer)
    cards.push(newCard)
   });
   const deck = new Deck(cards)
   const round = new Round(deck)
   this.currentRound = round;

  this.printMessage(deck, round)
  this.printQuestion(round)
};

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;