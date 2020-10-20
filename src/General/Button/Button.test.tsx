import * as React from 'react';
import Button from '.';

import * as renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';

import { ButtonVariantType, transformVariant } from './Button';
import { ButtonVariant, ButtonTheme } from '../../Utils/StyleConfig';

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
  const classNameMap = {
    [ButtonVariant.SOLID_BLUE]: 'aries-solid-btn',
    [ButtonVariant.SOLID_BLUE]: 'aries-solid-btn',
    [ButtonVariant.YELLOW]: 'aries-solid-shadow-btn',
    [ButtonVariant.GHOST]: 'aries-ghostbtn',
    [ButtonVariant.LINK]: 'aries-linkbtn',
  };

  Object.keys(classNameMap).forEach(variant => {
    it(`${variant}`, () => {
      const { getByText } = render(
        <Button variant={variant as ButtonVariantType}>click me</Button>
      );
      if (variant === ButtonVariant.LINK) {
        const linkButton = getByText('click me');
        expect(linkButton).toHaveClass(classNameMap[variant]);
      } else {
        const buttonContainer = getByText('click me').parentNode;
        expect(buttonContainer).toHaveClass(classNameMap[variant]);
      }
    });
  });
});

describe('transform the legacy variant and theme props to corresponding variant', () => {
  const deprecatedTheme = 'red';

  it('default', () => {
    expect(transformVariant('default')).toBe(ButtonVariant.SOLID_WHITE);
    expect(transformVariant('default', ButtonTheme.BLUE)).toBe(
      ButtonVariant.SOLID_BLUE
    );
    expect(transformVariant('default', deprecatedTheme)).toBe(
      ButtonVariant.SOLID_BLUE
    );
  });

  it('primary', () => {
    expect(transformVariant('primary')).toBe(ButtonVariant.YELLOW);
    expect(transformVariant('primary', ButtonTheme.BLUE)).toBe(
      ButtonVariant.YELLOW
    );
    expect(transformVariant('primary', deprecatedTheme)).toBe(
      ButtonVariant.YELLOW
    );
  });

  Object.values(ButtonVariant).forEach(variant => {
    it(`${variant}`, () => {
      expect(transformVariant(variant)).toBe(variant);

      if (variant === ButtonVariant.SOLID_WHITE) {
        // To check the legacy use of <Button theme="blue" />
        expect(transformVariant(variant, ButtonTheme.BLUE)).toBe(
          ButtonVariant.SOLID_BLUE
        );
        expect(transformVariant(variant, deprecatedTheme)).toBe(
          ButtonVariant.SOLID_BLUE
        );
      } else {
        expect(transformVariant(variant, ButtonTheme.BLUE)).toBe(variant);
        expect(transformVariant(variant, deprecatedTheme)).toBe(variant);
      }
    });
  });
});

describe('<Button /> forwards ref to underlying button element', () => {
  Object.values(ButtonVariant).forEach(variant => {
    test(`ref is being forwarded correctly for ${variant} button`, () => {
      const ref = React.createRef<HTMLButtonElement>();
      const { container } = render(
        <Button ref={ref} variant={variant}>
          ref
        </Button>
      );

      const button = container.querySelector('button');
      expect(button).toEqual(ref.current);
    });
  });
});
