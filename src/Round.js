const Turn = require("./Turn")

class Round {
    constructor(deck) {
        this.deck = deck
        this.turns = 0
        this.incorrectGuesses = []
        this.currentCard = this.deck[this.turns]
    }
    returnCurrentCard() {

        return this.currentCard = this.deck.cards[this.turns]
    }
    takeTurn(userGuess) {
        const turn = new Turn(userGuess, this.currentCard)
        if (turn.evaluateGuess() === false) {
            this.incorrectGuesses.push(this.currentCard.id)
        }
        this.turns += 1
        return turn.giveFeedback()
    }
    calculatePercentCorrect() {
        const correctGuesses = this.turns - this.incorrectGuesses.length
        return Math.round((correctGuesses/ this.turns) * 100)
    }
    endRound() {
        if (this.turns === 30) {
            return console.log(`**Round Over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
        }
    }
}

module.exports = Round