import * as React from 'react';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import Divider from './Divider';

describe('<Divider/> snapshots', () => {
  test('should match snapshot when no props is being passed', () => {
    const { asFragment } = render(<Divider />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('<Divider/> snapshots with theme prop', () => {
  const matchSnapshotWithTheme = (theme: string) => {
    test(`theme ${theme}`, () => {
      const { asFragment } = render(
        <Divider theme={theme} className="name" style={{ top: '10px' }} />
      );
      expect(asFragment()).toMatchSnapshot();
    });
  };

  ['red', 'blue', 'yellow', 'white', 'grey', 'default'].forEach(theme =>
    matchSnapshotWithTheme(theme)
  );
});
