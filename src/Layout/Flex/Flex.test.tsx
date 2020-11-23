import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { FlexPropAndPossibleValueMap } from './types';

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
  Object.entries(FlexPropAndPossibleValueMap).forEach(
    ([flexProp, possibleValue]) => {
      possibleValue.forEach((value: string) => {
        it(`should match snapshot when ${flexProp} is set ${value}`, () => {
          const props = {
            [flexProp]: value,
          };
          const { asFragment } = render(<Flex {...props} />);
          expect(asFragment()).toMatchSnapshot();
        });
      });
    }
  );
});
