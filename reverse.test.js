const reverse = require('./reverse');

test('reverses the string', () => {
    expect(reverse('str')).toBe('rts');
});