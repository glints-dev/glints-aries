import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import Swipeable from '../../src/Display/Swipeable';

import { SwipeableCardExample } from '../../src/Style/Display/SwipeableStyle';

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
      <Swipeable.Item>
        <SwipeableCardExample>
          <h1>Card.</h1>
        </SwipeableCardExample>
      </Swipeable.Item>
      <Swipeable.Item>
        <SwipeableCardExample>
          <h1>Card.</h1>
        </SwipeableCardExample>
      </Swipeable.Item>
      <Swipeable.Item>
        <SwipeableCardExample>
          <h1>Card.</h1>
        </SwipeableCardExample>
      </Swipeable.Item>
      <Swipeable.Item>
        <SwipeableCardExample>
          <h1>Card.</h1>
        </SwipeableCardExample>
      </Swipeable.Item>
    </Swipeable>
  </StorybookComponent>
);

export default SwipeableStory;
