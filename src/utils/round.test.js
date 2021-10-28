const { round } = require('./round');

it('should round properly', () => {
  expect(round(1.005, 1)).toBe(1.0);
  expect(round(1.005, 2)).toBe(1.01);
  expect(round(1.0005, 3)).toBe(1.001);
  expect(round(1.867, 2)).toBe(1.87);
  expect(round(10.867, 0)).toBe(11);
  expect(round(10.867, 3)).toBe(10.867);
});

