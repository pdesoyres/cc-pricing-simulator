import { classnames } from './classnames';

test('should return null when no className is given', () => {
  expect(classnames()).toBeNull();
});

test('should return null when giving nulls or undefined', () => {
  expect(classnames(null, undefined)).toBeNull();
});

test('should return the given classname when giving a single className', () => {
  expect(classnames('cls')).toBe('cls');
});

test('should return the right classnames', () => {
  expect(classnames('cls1', 'cls2', 'cls3')).toBe('cls1 cls2 cls3');
});

test('should return the right classnames when using array', () => {
  expect(classnames('cls1', ['cls2', 'cls3'])).toBe('cls1 cls2 cls3');
});

test('should ignore all null classNames', () => {
  expect(classnames('cls1', [null, 'cls3'], null)).toBe('cls1 cls3');
});