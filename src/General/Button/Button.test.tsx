import * as React from 'react';
import Button from '.';

import * as renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';

import { Variant } from '../../Utils/StyleConfig';
import { PrimaryColor, SecondaryColor, Greyscale } from '../../Style/Colors';

it('<Button> should render with text "click me" and an onClick handler', () => {
  const onClick = jest.fn();
  const ButtonSnapshot = renderer
    .create(<Button onClick={onClick}>click me</Button>)
    .toJSON();
  expect(ButtonSnapshot).toMatchSnapshot();
});

it('<Button> should render as button by default', () => {
  const { getByTestId } = render(
    <Button data-testid="test-button">test</Button>
  );
  expect(getByTestId('test-button').tagName).toBe('BUTTON');
});

describe('<Button> should render as the given tag', () => {
  const tags = ['a', 'h1', 'div'];
  tags.forEach((tag: string) => {
    it(`<Button> should render as ${tag}`, () => {
      const { container } = render(
        <Button tag={tag as React.ElementType}>button</Button>
      );
      const tagRegexp = new RegExp(tag, 'i');
      expect(container.querySelector(tag).tagName).toMatch(tagRegexp);
    });
  });
});

it('should call onClick once when it is clicked', () => {
  const onClick = jest.fn();
  const { getByText } = render(<Button onClick={onClick}>click me</Button>);
  const button = getByText('click me');
  fireEvent.click(button);
  expect(onClick).toHaveBeenCalledTimes(1);
});

it('should not call onClick when it is disabled', () => {
  const onClick = jest.fn();
  const { getByText } = render(
    <Button onClick={onClick} disabled>
      click me
    </Button>
  );
  const button = getByText('click me');
  fireEvent.click(button);
  expect(onClick).toHaveBeenCalledTimes(0);
});

describe('contains the correct className for each variant:', () => {
  Object.values(Variant).forEach(variant => {
    it(`${variant}`, () => {
      const { getByText } = render(<Button variant={variant}>click me</Button>);
      const button = getByText('click me');
      expect(button).toHaveClass(`aries-${variant}btn`);
    });
  });
});

describe('render the correct default style for each variant:', () => {
  const defaultStyleMap = {
    [Variant.SOLID]: {
      bgColor: Greyscale.white,
      color: SecondaryColor.actionblue,
    },
    [Variant.GHOST]: {
      bgColor: Greyscale.white,
      color: SecondaryColor.actionblue,
    },
    [Variant.SOLID_SHADOW]: {
      bgColor: PrimaryColor.glintsyellow,
      color: Greyscale.black,
    },
    [Variant.LINK]: {
      bgColor: Greyscale.white,
      color: SecondaryColor.actionblue,
    },
  };

  Object.values(Variant).forEach(variant => {
    it(`${variant}`, () => {
      const defaultStyle = defaultStyleMap[variant];
      const { getByText } = render(<Button variant={variant}>click me</Button>);
      const button = getByText('click me');
      expect(button).toHaveStyle(`background-color: ${defaultStyle.bgColor}`);
      expect(button).toHaveStyle(`color: ${defaultStyle.color}`);
    });
  });
});

describe('render the correct disabled style for each variant:', () => {
  Object.values(Variant).forEach(variant => {
    it(`${variant}`, () => {
      const { getByText } = render(
        <Button variant={variant} disabled>
          click me
        </Button>
      );
      const button = getByText('click me');
      expect(button).toHaveStyle(`background-color: ${Greyscale.lightgrey}`);
      expect(button).toHaveStyle(`color: ${Greyscale.white}`);
    });
  });
});
