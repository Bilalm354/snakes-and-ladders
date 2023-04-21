import { randomIntegerBetweenMinAndMaxInclusive } from "./utils";

interface Token {
  square: number;
}

const MIN_DICE_ROLL = 1;
const MAX_DICE_ROLL = 6;

export class Game {
  token: Token;
  diceRoll: number;

  constructor(){
    this.token = {
      square:0
    }
    
  }

  placeTokenOnTheFirstSquare() {
    this.token.square = 1;
  }

  moveToken(numberOfSpaces: number) {
    this.token.square = this.token.square + numberOfSpaces
  }

  rollDice() {
    return randomIntegerBetweenMinAndMaxInclusive(MIN_DICE_ROLL, MAX_DICE_ROLL)
  }
}
