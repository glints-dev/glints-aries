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

  test('should match snapshot when all props is being passed', () => {
    const { asFragment } = render(
      <Divider theme="blue" className="name" style={{ top: '10px' }} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
