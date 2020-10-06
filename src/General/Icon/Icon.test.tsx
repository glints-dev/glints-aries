import * as React from 'react';

import * as renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import styled from 'styled-components';

import Icon, { iconSizeType } from './Icon';

const testId = 'icon-svg';
const children = (
  <path d="M100 56.563H56.562V100H43.438V56.562H0V43.438h43.438V0h13.124v43.438H100z"></path>
);

test('<Icon> should matches snapshot', () => {
  const IconSnapshot = renderer.create(<Icon>{children}</Icon>).toJSON();
  expect(IconSnapshot).toMatchSnapshot();
});

test('<Icon> can be styled by styled-component', () => {
  const customStyle = 'margin: 10px';
  const StyledIcon = styled(Icon)`
    ${customStyle};
  `;
  const { getByTestId } = render(<StyledIcon>{children}</StyledIcon>);
  const icon = getByTestId(testId);
  expect(icon).toHaveStyle(customStyle);
});

test('<Icon> should be able to inherit color', () => {
  const { getByTestId } = render(<Icon>{children}</Icon>);
  const icon = getByTestId(testId);
  expect(icon).toHaveAttribute('fill', 'currentColor');
});

test('<Icon> should display the correct color prop', () => {
  const color = 'red';
  const { getByTestId } = render(<Icon color={color}>{children}</Icon>);
  const icon = getByTestId(testId);
  expect(icon).toHaveAttribute('fill', color);
});

describe('<Icon> should display the correct size prop', () => {
  const matchSnapshotWithSize = (size: iconSizeType) => {
    test(`size ${size}`, () => {
      const { asFragment } = render(<Icon size={size}>{children}</Icon>);
      expect(asFragment()).toMatchSnapshot();
    });
  };

  const iconSizes = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'];
  iconSizes.forEach((size: iconSizeType) => matchSnapshotWithSize(size));
});

test('<Icon> should call onClick once when it is clicked', () => {
  const onClick = jest.fn();
  const { getByTestId } = render(<Icon onClick={onClick}>{children}</Icon>);
  const icon = getByTestId(testId);
  fireEvent.click(icon);
  expect(onClick).toHaveBeenCalledTimes(1);
});
