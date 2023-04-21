import { describe, expect, test } from '@jest/globals';

import { randomIntegerBetweenMinAndMaxInclusive } from "./utils";

describe('randomIntegerBetweenMinAndMaxInclusive', () => {
    test('should return integeter between min and max inclusive', () => {
      const min = 1;
      const max = 10;
  
      const results: number[] = []
  
      for (let i = 0; i < 100; i ++) {
        const result = randomIntegerBetweenMinAndMaxInclusive(min, max)
        results.push(result)
      }
  
      results.forEach(result => {
        expect(result).toBeGreaterThanOrEqual(min)
        expect(result).toBeLessThanOrEqual(max)
      })
    })
  })