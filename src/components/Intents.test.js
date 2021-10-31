import { Intents, resolveIntent } from './Intents';

it('should resolve to normal when undefined', () => {
  expect(resolveIntent(undefined)).toBe(Intents.NORMAL);
});

it('should resolve to normal when unknown', () => {
  expect(resolveIntent('unknown')).toBe(Intents.NORMAL);
});

it('should resolve to given intent', () => {
  Object.values(Intents).forEach(intent => {
    expect(resolveIntent(intent)).toBe(intent);
  })
});
