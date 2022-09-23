const analyzeArray = require('./analyze');

test('finds the average of array elements', () => {
    expect(analyzeArray.average([1, 5, 6])).toBe(4);
});

test('finds the smallest number in an array', () => {
 expect(analyzeArray.findSmallest([1, 5, 6])).toBe(1);
});

test('find the largest number in an array', () => {
    expect(analyzeArray.findLargest([1, 5, 6])).toBe(6);
});

test('find the length of an array', () => {
    expect(analyzeArray.findLength([1, 5, 6])).toBe(3);
});