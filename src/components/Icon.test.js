import { render } from '@testing-library/react';
import { TrashSvg } from '../utils/icons';
import { Icon } from './Icon';

it('should contain an svg element', () => {
  const { container } = render(<Icon svg={TrashSvg}/>);
  const svg = container.querySelector('svg.cc-icon');
  expect(svg).not.toBeNull();
});

it('should have the default size', () => {
  const { container } = render(<Icon svg={TrashSvg}/>);
  const svg = container.querySelector('svg.cc-icon');
  expect(svg.getAttribute("width")).toBe("16");
  expect(svg.getAttribute("height")).toBe("16");
});

it('should have no fill attribute by default', () => {
  const { container } = render(<Icon svg={TrashSvg}/>);
  const svg = container.querySelector('svg.cc-icon');
  expect(svg.getAttribute("fill")).toBeNull();
});

it('should have the given size', () => {
  const { container } = render(<Icon svg={TrashSvg} size={24}/>);
  const svg = container.querySelector('svg.cc-icon');
  expect(svg.getAttribute("width")).toBe("24");
  expect(svg.getAttribute("height")).toBe("24");
});

it('should have the fill attribute set to the given color', () => {
  const { container } = render(<Icon svg={TrashSvg} color={"#000"}/>);
  const svg = container.querySelector('svg.cc-icon');
  expect(svg.getAttribute("fill")).toBe("#000");
});

