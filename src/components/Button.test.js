import { render } from '@testing-library/react';
import { TrashSvg } from '../utils/icons';
import { Button } from './Button';

it('should start with a button.cc-button', () => {
  const { container } = render(<Button/>);
  const btn = container.querySelector('button.cc-button');
  expect(btn).not.toBeNull();
});

it('should have no label by default', () => {
  const { container } = render(<Button />);
  const e = container.querySelector('div.cc-button-label');
  expect(e).toBeNull();
});

it('should have no icon by default', () => {
  const { container } = render(<Button />);
  const e = container.querySelector('div.cc-button-icon');
  expect(e).toBeNull();
});

it('should have the given label', () => {
  const { container } = render(<Button label="label"/>);
  const e = container.querySelector('div.cc-button-label');
  expect(e).not.toBeNull();
  expect(e.textContent).toBe("label");
});


it('should have an icon when set', () => {
  const { container } = render(<Button icon={TrashSvg} />);
  const e = container.querySelector('div.cc-button-icon');
  expect(e).not.toBeNull();
});

it('should have two icon when set', () => {
  const { container } = render(<Button icon={TrashSvg} rightIcon={TrashSvg} />);
  const e = container.querySelectorAll('div.cc-button-icon');
  expect(e.length).toBe(2);
});

it('should have the given intent', () => {
  const { container } = render(<Button intent="danger"/>);
  const e = container.querySelector('button.cc-button.danger');
  expect(e).not.toBeNull();
});

it('should be disabled', () => {
  const { container } = render(<Button disabled={true}/>);
  const e = container.querySelector('button.cc-button.disabled');
  expect(e).not.toBeNull();
});

it('should trigger onClick callback when receives a click', () => {
  const onClick = jest.fn();
  const { container } = render(<Button onClick={onClick}/>);
  container.querySelector('button.cc-button').click();
  expect(onClick).toBeCalled();
});

it('should not trigger onClick callback when disabled', () => {
  const onClick = jest.fn();
  const { container } = render(<Button onClick={onClick} disabled={true}/>);
  container.querySelector('button.cc-button').click();
  expect(onClick).not.toBeCalled();
});
