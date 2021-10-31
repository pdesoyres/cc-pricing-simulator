import { render } from '@testing-library/react';
import { KeyValuePairs, KeyValuePair } from './KeyValuePairs';

test('should start with a div.cc-key-value-pairs element', () => {
  const { container } = render(<KeyValuePairs/>);
  const e = container.querySelector('div.cc-key-value-pairs');
  expect(e).not.toBeNull();
});

test('should add given pair', () => {
  const { container } = render(<KeyValuePairs><KeyValuePair pKey='key' value='value'/></KeyValuePairs>);
  const key = container.querySelector('.cc-key-value-pair-key');
  const value = container.querySelector('.cc-key-value-pair-value');

  expect(key).not.toBeNull();
  expect(key.textContent).toBe('key');

  expect(value).not.toBeNull();
  expect(value.textContent).toBe('value');
});

test('should not add non KeyValuePair elements', () => {
  const { container } = render(<KeyValuePairs><div className='test-class'/></KeyValuePairs>);
  const e = container.querySelector('.test-class');
  expect(e).toBeNull();
});
