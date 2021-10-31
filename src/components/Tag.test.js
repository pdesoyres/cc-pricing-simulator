import { render } from '@testing-library/react';
import { Intents } from './Intents';
import { Tag } from './Tag';

test('should start with a div.cc-tag element', () => {
  const { container } = render(<Tag/>);
  const e = container.querySelector('div.cc-tag');
  expect(e).not.toBeNull();
});

test('should display the given label', () => {
  const { container } = render(<Tag label='label'/>);
  const e = container.querySelector('div.cc-tag');
  expect(e.textContent).toBe('label');
});

test('should have the normal intent by default', () => {
  const { container } = render(<Tag label='label'/>);
  const e = container.querySelector('div.cc-tag.normal');
  expect(e).not.toBeNull();
});

test('should have the given intent', () => {
  const { container } = render(<Tag label='label' intent={Intents.DANGER}/>);
  const e = container.querySelector('div.cc-tag.danger');
  expect(e).not.toBeNull();
});
