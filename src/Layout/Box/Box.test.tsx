import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Shadow } from '../../Utils/Shadow';

import { Box } from './index';

describe('<Box /> space', () => {
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

describe('<Box /> ensure default space theme is overwritten', () => {
  it('should have "padding: 4px" style when padding is 4', () => {
    const { container } = render(<Box p={4} />);
    expect(container.firstChild).toHaveStyle('padding: 4px');
  });

  it('should have "margin: 8px" style when margin is 8', () => {
    const { container } = render(<Box m={8} />);
    expect(container.firstChild).toHaveStyle('margin: 8px');
  });
});

describe('<Box /> shadow', () => {
  it('should match snapshot when shadow down is set', () => {
    const { asFragment } = render(<Box boxShadow={Shadow.down1} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot when shadow up is set', () => {
    const { asFragment } = render(<Box boxShadow={Shadow.up1} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
