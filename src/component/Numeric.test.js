import { render } from '@testing-library/react';
import { Numeric } from './Numeric';

it('should be 0 by default', () => {
  const { container } = render(<Numeric/>);
  const e = container.querySelector('span.cc-numeric');
  expect(e).not.toBeNull();
  expect(e.textContent).toBe('0');
});

it('should not round', () => {
  const { container } = render(<Numeric value={10.98124876124}/>);
  const e = container.querySelector('span.cc-numeric');
  expect(e.textContent).toBe('10.98124876124');
});

it('should round', () => {
  const { container } = render(<Numeric value={10.98124876124} precision={2}/>);
  const e = container.querySelector('span.cc-numeric');
  expect(e.textContent).toBe('10.98');
});

it('should use the given unit', () => {
  const { container } = render(<Numeric unit='$'/>);
  const e = container.querySelector('span.cc-numeric');
  expect(e.textContent).toBe('0 $');
});
