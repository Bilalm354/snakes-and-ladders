export class Game {
  token: Token;

  constructor(){
    this.token = {
      square:1
    }
  }

  placeSquareOnTheBoard() {
    this.token.square = 1;
  }

  moveToken(numberOfSpaces: number) {
    this.token.square = this.token.square + numberOfSpaces
  }
}

interface Token {
  square: number;
}