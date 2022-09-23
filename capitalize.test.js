const capitalize = require('./capitalize');

test('capitalizes the first letter of the string', () => {
    expect(capitalize('str')).toBe('Str');
});