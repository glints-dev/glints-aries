import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Swipeable from './Swipeable';

describe('<Swipeable /> prop className', () => {
  const matchSnapshot = (className: string) => {
    test(`should match snapshot when class name ${className} is passed`, () => {
      const { asFragment } = render(
        <Swipeable className={className}>
          <Swipeable.Item className={className}>Item</Swipeable.Item>
        </Swipeable>
      );
      // validate class name from snapshot
      expect(asFragment()).toMatchSnapshot();
    });
  };

  ['test', undefined].forEach(matchSnapshot);
});

describe('<Swipeable /> prop children', () => {
  const itemCount = 10;
  test(`should render ${itemCount} <Swipeable.Item />`, () => {
    render(
      <Swipeable>
        {Array.from(Array(itemCount).keys()).map(number => (
          <Swipeable.Item key={number}>Card. {number}</Swipeable.Item>
        ))}
      </Swipeable>
    );

    const items = document.querySelectorAll('.swipeable-itemwrapper');
    expect(items).toHaveLength(itemCount);
  });
});

test('<Swipeable /> should be scrollable', () => {
  render(
    <Swipeable>
      <Swipeable.Item>Item</Swipeable.Item>
    </Swipeable>
  );

  const swipeable = document.querySelector('.aries-swipeable');
  expect(swipeable).toHaveStyle('overflow-x: auto');
});
