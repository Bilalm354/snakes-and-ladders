import { describe, expect, test } from '@jest/globals';
import { Game, } from './main';

const token = [];

describe('Game', () => {
  describe('token can move across the board', () => {
    test('should place token on square 1 when the game is started', () => {
      // Given the game is started
      const game = new Game();
  
      // When the token is placed on the board
      game.placeSquareOnTheBoard();
  
      // Then the token is on square 1
      expect(game.token.square).toBe(1);
    })
  
    test('should return 4 when moving token 3 spaces from square 1', () => {
      // Given the token is on square 1
      const game = new Game();
      game.placeSquareOnTheBoard();
  
      // When the token is moved 3 spaces
      game.moveToken(3);
      // Then the token is on square 4
      expect(game.token.square).toBe(4);
    })
  
    test('1 moved 4 and then 4 should end on 8', () => {
      // Given the token is on square 1
      const game = new Game();
      game.placeSquareOnTheBoard();

      // When the token is moved 3 spaces
      game.moveToken(3);

      // And then it is moved 4 spaces
      game.moveToken(4);

      // Then the token is on square 8
      expect(game.token.square).toBe(8);
      
    })
  })

  describe('token can move across the board', () => {
  })
});