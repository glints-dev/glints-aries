import * as React from 'react';

import 'jest-styled-components';
import * as renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import Badge, { BadgeType } from './Badge';

const label = '6';

it(`<Badge> should render a label with the text "6"`, () => {
  const BadgeSnapshot = renderer.create(<Badge label={label} />).toJSON();
  expect(BadgeSnapshot).toMatchSnapshot();
});

it('should display the correct text when rendered', () => {
  const { queryByText } = render(<Badge label={label} />);
  const BadgeContent = queryByText(label);
  expect(BadgeContent).toBeVisible();
});

describe('when sup is:', () => {
  it('true, should have a top property', () => {
    const { getByRole } = render(<Badge label={label} sup />);
    const badgeContainer = getByRole('presentation');
    expect(badgeContainer).toHaveStyle('top: -.6em');
  });

  it('false, should not have a top property', () => {
    const { getByRole } = render(<Badge label={label} sup={false} />);
    const badgeContainer = getByRole('presentation');
    const { top } = getComputedStyle(badgeContainer);
    expect(top).toBeFalsy();
  });
});

describe('<Badge/> snapshots with variant prop', () => {
  const matchSnapshotWithVariant = (variant: BadgeType) => {
    test(`variant ${variant}`, () => {
      const { asFragment } = render(<Badge variant={variant} label={label} />);
      expect(asFragment()).toMatchSnapshot();
    });
  };

  ['default', 'dimmed'].forEach((variant: BadgeType) =>
    matchSnapshotWithVariant(variant)
  );
});
