import { Game } from "./Game";

function main() { // for single player
  const game = new Game();
  console.log('starting square: ', game.token.square);

  while (!game.player.hasWon) {
    // render
    // wait for player input to roll dice
    const diceRoll = game.rollDice()
    console.log('rolled dice: ', diceRoll)
    // render roll
    game.moveToken(diceRoll);
    console.log('square after moving', game.token.square);
  }
  console.log('Player has won!')
}

main()