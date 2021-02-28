import * as React from 'react';

import 'jest-styled-components';
import * as renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import Badge, { BadgeType } from './Badge';
import { BadgeVariant } from './BadgeVariant';

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

describe('<Badge/> snapshots with variant prop', () => {
  const matchSnapshotWithVariant = (variant: BadgeType) => {
    test(`variant ${variant}`, () => {
      const { asFragment } = render(<Badge variant={variant} label={label} />);
      expect(asFragment()).toMatchSnapshot();
    });
  };

  Object.values(BadgeVariant).forEach((variant: BadgeType) =>
    matchSnapshotWithVariant(variant)
  );
});
