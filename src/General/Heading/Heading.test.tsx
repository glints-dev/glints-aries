import * as React from 'react';

import * as renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import Heading from './Heading';

const heading = 'This is a Heading';

it(`<Heading> should match snapshot when the component is called`, () => {
  const HeadingSnapshot = renderer
    .create(<Heading className="test-class-name">{heading}</Heading>)
    .toJSON();
  expect(HeadingSnapshot).toMatchSnapshot();
});

describe('<Heading> should render the correct case for the text when', () => {
  it('uppercaseText is true', () => {
    const { getByRole } = render(<Heading uppercaseText>{heading}</Heading>);
    const headingContainer = getByRole('heading');
    expect(headingContainer).toHaveStyle('text-transform: uppercase');
  });

  it('uppercaseText is false', () => {
    const { getByRole } = render(
      <Heading uppercaseText={false}>{heading}</Heading>
    );
    const headingContainer = getByRole('heading');
    const { textTransform } = getComputedStyle(headingContainer);
    expect(textTransform).toBeFalsy();
  });
});

describe('<Heading> should render the correct display for the text when', () => {
  it('inline is true', () => {
    const { getByRole } = render(<Heading inline>{heading}</Heading>);
    const headingContainer = getByRole('heading');
    expect(headingContainer).toHaveStyle('display: inline-block');
  });

  it('inline is false', () => {
    const { getByRole } = render(<Heading inline={false}>{heading}</Heading>);
    const headingContainer = getByRole('heading');
    expect(headingContainer).toHaveStyle('display: block');
  });
});
