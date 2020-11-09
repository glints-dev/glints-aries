import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import { Box } from './index';

describe('<Box />', () => {
  it('should match snapshot when margin is set', () => {
    const { asFragment } = render(<Box m={64} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot when all margin directions are set', () => {
    const { asFragment } = render(<Box mt={64} mr={64} mb={64} ml={64} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot when padding is set', () => {
    const { asFragment } = render(<Box p={64} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot when all padding directions are set', () => {
    const { asFragment } = render(<Box pt={64} pr={64} pb={64} pl={64} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot when responsive margin is set', () => {
    const { asFragment } = render(<Box m={{ default: 32, desktopS: 64 }} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot when responsive padding is set', () => {
    const { asFragment } = render(<Box p={{ default: 32, desktopS: 64 }} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
