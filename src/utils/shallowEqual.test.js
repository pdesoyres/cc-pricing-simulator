import { shallowEqual } from './shallowEqual';

it('null should be equal', () => {
  expect(shallowEqual(null, null)).toBe(true);
});

it('undefined should be equal', () => {
  expect(shallowEqual(undefined, undefined)).toBe(true);
});

it('numbers should be equal', () => {
  expect(shallowEqual(1, 1)).toBe(true);
});

it('strings should be equal', () => {
  expect(shallowEqual("abc", "abc")).toBe(true);
});

it('booleans should be equal', () => {
  expect(shallowEqual(true, true)).toBe(true);
  expect(shallowEqual(false, false)).toBe(true);
});

it('objects should be equal', () => {
  expect(shallowEqual({ a: 'a', b: 1 },  { a: 'a', b: 1})).toBe(true);
});

it('objects should not be equal', () => {
  expect(shallowEqual({ a: 'a', b: 1 },  { a: 'oops', b: 1})).toBe(false);
});

it('same instances should be equal', () => {
  const d = new Date();
  expect(shallowEqual(d, d)).toBe(true);
});

it('arrays should be equal', () => {
  expect(shallowEqual(['a', 'b'],  ['a', 'b'])).toBe(true);
});

it('arrays should not be equal', () => {
  expect(shallowEqual(['a', 'b'],  ['a', 'oops'])).toBe(false);
});

it('arrays of objects should be equal', () => {
  expect(shallowEqual(
    [{ a: 1, b: 'b' }, { c: 1, d: 'd' }],
    [{ a: 1, b: 'b' }, { c: 1, d: 'd' }]))
    .toBe(true);
});

it('arrays of objects should not be equal', () => {
  expect(shallowEqual(
    [{ a: 1, b: 'b' }, { c: 1, d: 'oops' }],
    [{ a: 1, b: 'b' }, { c: 1, d: 'd' }]))
    .toBe(false);
});

it('arrays of objects should not be equal when nested object', () => {
  expect(shallowEqual(
    [{ a: 1, b: 'b' }, { c: 1, d: { x: 'x' } }],
    [{ a: 1, b: 'b' }, { c: 1, d: { x: 'x' } }]))
    .toBe(false);
});

it('arrays of objects should not equal when nested object and deeper', () => {
  expect(shallowEqual(
    [{ a: 1, b: 'b' }, { c: 1, d: { x: 'x' } }],
    [{ a: 1, b: 'b' }, { c: 1, d: { x: 'x' } }], 2))
    .toBe(true);
});
