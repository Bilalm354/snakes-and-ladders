import { randomIntegerBetweenMinAndMaxInclusive } from "./utils";

const MIN_DICE_ROLL = 1;
const MAX_DICE_ROLL = 6;

interface Token {
  square: number;
}

export class Game {
  token: Token;
  player: {
    hasWon: boolean
  }

  constructor(){
    this.token = {
      square:0
    }
    this.player = {
      hasWon: false
    }
    
  }

  placeTokenOnTheFirstSquare() {
    this.token.square = 1;
  }

  moveToken(numberOfSpaces: number) {
    const newSquare = this.token.square + numberOfSpaces;
    if (newSquare <= 100) {
      this.token.square = newSquare
    }
    
    if (this.token.square === 100) {
      this.setPlayerHasWonToTrue();
    }
  }

  setPlayerHasWonToTrue() {
    this.player.hasWon = true;
  }

  rollDice() {
    return randomIntegerBetweenMinAndMaxInclusive(MIN_DICE_ROLL, MAX_DICE_ROLL)
  }
}
