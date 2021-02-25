import * as React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import DropdownItem from './DropdownItem';

describe('<DropdownItem /> prop className', () => {
  const matchSnapshot = (className: string) => {
    test(`should match snapshot when class name ${className} is passed`, () => {
      const { asFragment } = render(
        <DropdownItem className={className}>Product Manager</DropdownItem>
      );

      expect(asFragment()).toMatchSnapshot();
    });
  };

  ['test', undefined].forEach(matchSnapshot);
});
