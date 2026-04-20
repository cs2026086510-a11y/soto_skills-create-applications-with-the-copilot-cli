const { modulo, power, squareRoot, add, subtract, multiply, divide } = require('../calculator');

describe('extended operations', () => {
  test('modulo returns remainder', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('modulo throws on zero divisor', () => {
    expect(() => modulo(5, 0)).toThrow('Division by zero in modulo');
  });

  test('power returns base^exponent', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('power with negative exponent', () => {
    expect(power(2, -1)).toBeCloseTo(0.5);
  });

  test('squareRoot returns correct value', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('squareRoot throws on negative numbers', () => {
    expect(() => squareRoot(-9)).toThrow('Cannot take square root of negative number');
  });
});
