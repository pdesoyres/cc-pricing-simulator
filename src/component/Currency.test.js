import { render } from '@testing-library/react';
import { Currency } from './Currency';

it('should be O € by default', () => {
  const { container } = render(<Currency/>);
  const e = container.querySelector('span.cc-currency');
  expect(e).not.toBeNull();
  expect(e.textContent).toBe('0 €');
});

it('should not round', () => {
  const { container } = render(<Currency value={10.98124876124}/>);
  const e = container.querySelector('span.cc-currency');
  expect(e.textContent).toBe('10.98124876124 €');
});

it('should round', () => {
  const { container } = render(<Currency value={10.98124876124} precision={2}/>);
  const e = container.querySelector('span.cc-currency');
  expect(e.textContent).toBe('10.98 €');
});

it('should use the given unit', () => {
  const { container } = render(<Currency unit='$'/>);
  const e = container.querySelector('span.cc-currency');
  expect(e.textContent).toBe('0 $');
});
