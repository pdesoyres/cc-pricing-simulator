import { render } from '@testing-library/react';
import { Spinner } from './Spinner';

it('should create div.cc-spinner with default style', () => {
  const { container } = render(<Spinner/>);
  const e = container.querySelector('div.cc-spinner');
  expect(e).not.toBeNull();
  expect(e.style.width).toBe("30px");
  expect(e.style.width).toBe("30px");
  expect(e.style.borderColor).toBe('#d8e1e8');
  expect(e.style.borderTopColor).toBe('#26547c');
  expect(e.style.borderWidth).toBe("3px");
});

it('should have the right style', () => {
  const { container } = render(<Spinner size={50} color='red' trackColor='blue' strokeSize={5} />);
  const e = container.querySelector('div.cc-spinner');
  expect(e).not.toBeNull();
  expect(e.style.width).toBe("50px");
  expect(e.style.width).toBe("50px");
  expect(e.style.borderColor).toBe('blue');
  expect(e.style.borderTopColor).toBe('red');
  expect(e.style.borderWidth).toBe("5px");
});