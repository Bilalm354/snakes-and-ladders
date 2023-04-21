import { describe, expect, test } from '@jest/globals';
import { Game } from './Game';

describe('Game', () => {
  describe('token can move across the board', () => {
    test('should place token on square 1 when the game is started', () => {
      // Given the game is started
      const game = new Game();
  
      // When the token is placed on the board
      game.placeTokenOnTheFirstSquare();
  
      // Then the token is on square 1
      expect(game.token.square).toBe(1);
    })
  
    test('should return 4 when moving token 3 spaces from square 1', () => {
      // Given the token is on square 1
      const game = new Game();
      game.placeTokenOnTheFirstSquare();
  
      // When the token is moved 3 spaces
      game.moveToken(3);
      // Then the token is on square 4
      expect(game.token.square).toBe(4);
    })
  
    test('should end on 8 when token starts on 1, is moved 3 and then 4', () => {
      // Given the token is on square 1
      const game = new Game();
      game.placeTokenOnTheFirstSquare();

      // When the token is moved 3 spaces
      game.moveToken(3);

      // And then it is moved 4 spaces
      game.moveToken(4);

      // Then the token is on square 8
      expect(game.token.square).toBe(8);
      
    })
  })

  describe('moves are determined by dice rolls', () => {
    test('dice should be between 1 and 6 inclusive', () => {
      // Given
      const game = new Game();

      const min = 1;
      const max = 6;
  
      // When
      const results: number[] = []

      for (let i = 0; i < 100; i ++) {
        const result = game.rollDice();
        results.push(result)
      }
  
      // Then
      results.forEach(result => {
        expect(result).toBeGreaterThanOrEqual(min)
        expect(result).toBeLessThanOrEqual(max)
      })
    })

    test('should move the token as many spaces as the dice roll', () => {
      // Given the player rolls a 4
      const game = new Game();
      const initialSquare = game.token.square
      const diceRoll = 4;

      // When they move their token
      game.moveToken(diceRoll);

      // Then the token should move 4 spaces
      expect(game.token.square).toBe(initialSquare + diceRoll)
    })
  })

  describe('player should win if they land on square 100', () => {
    test('player should win if they land on square 100', () => {
      // Given the token is on square 97
      const game = new Game();
      game.token.square = 97

      // When the token is moved 3 spaces
      game.moveToken(3)

      // Then the token is on square 100
      expect(game.token.square).toBe(100);
      // And the player has won the game
      expect(game.player.hasWon).toBe(true);
    })

    test('player should not win the game if they are on square 97 and move 4 places', () => {
        // Given the token is on square 97
        const game = new Game();
        game.token.square = 97
  
        // When the token is moved 4 spaces
        game.moveToken(4)
  
        // Then the token is on square 97
        expect(game.token.square).toBe(97);
        // And the player has not won the game
        expect(game.player.hasWon).toBe(false);
    })
  })
});