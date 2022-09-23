const calculator = require('./calculator');

test('adds two numbers together', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test('subtracts a number from another number', () => {
    expect(calculator.subtract(9, 5)).toBe(4);
});

test('multiplies two numbers', () => {
    expect(calculator.multiply(4, 6)).toBe(24);
});

test('divides one number by another', () => {
    expect(calculator.divide(9, 3)).toBe(3);
});