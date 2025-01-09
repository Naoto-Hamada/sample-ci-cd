const sum = require('./sum');
test('1 + 2 = 3になることを確認', () => {
  expect(sum(1, 3)).toBe(3);
});
