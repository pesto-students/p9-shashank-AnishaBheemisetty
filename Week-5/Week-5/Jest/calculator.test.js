const mathOperations = require('./calculator');

describe("Calculator tests", () => {
  test('adding of 1 + 2 should return 3', () => {
    expect(mathOperations.sum(1, 2)).toBe(3);
  });
  test('difference of 5-2 should return 3', () => {
    expect(mathOperations.diff(5, 2)).toBe(3);
  });
  test('product of 1 * 2 should return 2', () => {
    expect(mathOperations.product(1, 2)).toBe(2);
  });
 })



