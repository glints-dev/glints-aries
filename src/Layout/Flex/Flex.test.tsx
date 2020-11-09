import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import { Flex } from './index';

describe('<Flex /> spacing properties', () => {
  it('should match snapshot when margin is set', () => {
    const { asFragment } = render(<Flex m={64} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot when all margin directions are set', () => {
    const { asFragment } = render(<Flex mt={64} mr={64} mb={64} ml={64} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot when padding is set', () => {
    const { asFragment } = render(<Flex p={64} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot when all padding directions are set', () => {
    const { asFragment } = render(<Flex pt={64} pr={64} pb={64} pl={64} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot when responsive margin is set', () => {
    const { asFragment } = render(<Flex m={{ default: 32, desktopS: 64 }} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot when responsive padding is set', () => {
    const { asFragment } = render(<Flex p={{ default: 32, desktopS: 64 }} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('<Flex /> flex properties', () => {
  it('should match snapshot when flexDirection is set', () => {
    const { asFragment } = render(<Flex flexDirection="column" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot when justifyContent is set', () => {
    const { asFragment } = render(<Flex justifyContent="center" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot when alignItems is set', () => {
    const { asFragment } = render(<Flex alignItems="center" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot when flexWrap is set', () => {
    const { asFragment } = render(<Flex flexWrap="wrap" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
