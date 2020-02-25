import * as React from 'react';

import * as renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Icon from './Icon';

const testId = 'icon-svg';
const children = (
  <path d="M100 56.563H56.562V100H43.438V56.562H0V43.438h43.438V0h13.124v43.438H100z"></path>
);

it('<Icon> should render a svg with color, width, height and a path as children', () => {
  const IconSnapshot = renderer.create(<Icon>{children}</Icon>).toJSON();
  expect(IconSnapshot).toMatchSnapshot();
});

it('<Icon> should accept a className to apply the style from styled-component', () => {
  const className = 'styled-class';
  const { getByTestId } = render(<Icon className={className}>{children}</Icon>);
  const icon = getByTestId(testId);
  expect(icon).toHaveClass(className);
});

it('<Icon> should be able to inherit color', () => {
  const { getByTestId } = render(<Icon>{children}</Icon>);
  const icon = getByTestId(testId);
  expect(icon).toHaveAttribute('fill', 'currentColor');
});

it('<Icon> should display the correct color prop', () => {
  const color = 'red';
  const { getByTestId } = render(<Icon color={color}>{children}</Icon>);
  const icon = getByTestId(testId);
  expect(icon).toHaveAttribute('fill', color);
});

it('<Icon> should call onClick once when it is clicked', () => {
  const onClick = jest.fn();
  const { getByTestId } = render(<Icon onClick={onClick}>{children}</Icon>);
  const icon = getByTestId(testId);
  fireEvent.click(icon);
  expect(onClick).toHaveBeenCalledTimes(1);
});
