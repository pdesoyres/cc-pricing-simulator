import { render } from '@testing-library/react';
import { List } from './List';

test('should start with a div.cc-list element', () => {
  const { container } = render(<List/>);
  const listDiv = container.querySelector('div.cc-list');
  expect(listDiv).not.toBeNull();
});

test('should set the given className', () => {
  const { container } = render(<List className='my-class'/>);
  const listDiv = container.querySelector('div.my-class');
  expect(listDiv).not.toBeNull();
});

test('should have no item when empty', () => {
  const { container } = render(<List/>);
  const items = container.querySelector('div.cc-list-item');
  expect(items).toBeNull();
});

test('should have empty class when empty', () => {
  const { container } = render(<List/>);
  const items = container.querySelector('div.cc-list.cc-list-empty');
  expect(items).not.toBeNull();
});

test('should have empty state item when empty', () => {
  const { container } = render(<List emptyState='empty'/>);
  const items = container.querySelector('div.cc-list-empty-state');
  expect(items).not.toBeNull();
  expect(items.textContent).toBe('empty');
});

test('should not have empty state item when empty and emptyState not provided', () => {
  const { container } = render(<List/>);
  const items = container.querySelector('div.cc-list-empty-state');
  expect(items).toBeNull();
});

test('should have the right items', () => {
  const { container } = render(<List items={['a', 'b']}/>);
  const items = container.querySelectorAll('div.cc-list-item');
  expect(items.length).toBe(2);
  expect(items[0].textContent).toBe('a');
  expect(items[1].textContent).toBe('b');
});

test('should have the right items properly rendered', () => {
  const { container } = render(<List items={['a', 'b']} itemRenderer={(item, index) => `${item}${index}`}/>);
  const items = container.querySelectorAll('div.cc-list-item');
  expect(items.length).toBe(2);
  expect(items[0].textContent).toBe('a0');
  expect(items[1].textContent).toBe('b1');
});

test('should not have empty state item when not empty', () => {
  const { container } = render(<List items={['a', 'b']} emptyState='empty'/>);
  const items = container.querySelector('div.cc-list-empty-state');
  expect(items).toBeNull();
});
