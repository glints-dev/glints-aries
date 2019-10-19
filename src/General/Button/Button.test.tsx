import * as React from 'react';
import Button from '.';

import * as renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';

import { Variant } from '../../Utils/StyleConfig';

it('<Button> should render with text "click me" and an onClick handler', () => {
  const onClick = jest.fn();
  const ButtonSnapshot = renderer
    .create(<Button onClick={onClick}>click me</Button>)
    .toJSON();
  expect(ButtonSnapshot).toMatchSnapshot();
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
  const variants = [...Object.values(Variant), 'default'];
  variants.forEach(variant => {
    it(`${variant}`, () => {
      const { getByText } = render(<Button variant={variant}>click me</Button>);
      if (variant === Variant.LINK) {
        const linkButton = getByText('click me');
        expect(linkButton).toHaveClass(`aries-${variant}btn`);
      } else {
        const buttonContainer = getByText('click me').parentNode;
        expect(buttonContainer).toHaveClass(`aries-${variant}btn`);
      }
    });
  });
});
