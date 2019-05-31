import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import Swipeable from '../../src/Display/Swipeable';

// Example
import { SwipeableCardExample } from '../../src/Style/Display/SwipeableStyle';

const props = {
  'Swipeable.Item': [
    {
      name: 'onClick',
      type: 'function',
      defaultValue: '',
      possibleValue: 'function',
      require: 'no',
      description: '',
    },
  ],
};

const SwipeableStory = () => (
  <StorybookComponent
    title="Swipeable"
    code="import { Swipeable } from 'glints-aries'"
    propsObject={props}
    usage={`<Swipeable>
  <Swipeable.Item onClick={...}>
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
          <h1>
            Card.
          </h1>
        </SwipeableCardExample>
      </Swipeable.Item>
      <Swipeable.Item>
        <SwipeableCardExample>
          <h1>
            Card.
          </h1>
        </SwipeableCardExample>
      </Swipeable.Item>
      <Swipeable.Item>
        <SwipeableCardExample>
          <h1>
            Card.
          </h1>
        </SwipeableCardExample>
      </Swipeable.Item>
      <Swipeable.Item>
        <SwipeableCardExample>
          <h1>
            Card.
          </h1>
        </SwipeableCardExample>
      </Swipeable.Item>
    </Swipeable>
  </StorybookComponent>
);

export default SwipeableStory;
