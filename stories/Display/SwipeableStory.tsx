import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import Swipeable from '../../src/Display/Swipeable';

import { SwipeableCardExample } from '../../src/Display/Swipeable/SwipeableStyle';

const SwipeableStory = () => (
  <StorybookComponent
    title="Swipeable"
    code="import { Swipeable } from 'glints-aries'"
    usage={`<Swipeable>
  <Swipeable.Item>
    <Component />
  </Swipeable.Item>
  <Swipeable.Item>
    <Component />
  </Swipeable.Item>
</Swipeable>`}
  >
    <Swipeable>
      {Array.from(Array(10).keys()).map(number => (
        <Swipeable.Item key={number}>
          <SwipeableCardExample>
            <h1>Card. {number}</h1>
          </SwipeableCardExample>
        </Swipeable.Item>
      ))}
    </Swipeable>
  </StorybookComponent>
);

export default SwipeableStory;
