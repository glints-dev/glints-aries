import React from 'react';

import Swipeable from '../../src/Display/Swipeable';
import Collapsible from '../../src/Display/Collapsible';

// Example
import { SwipeableCardExample } from '../../src/Style/Display/SwipeableStyle';

const SwipeableStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Swipeable
      </h1>
      <p>
        <code>
          {'import { Swipeable } from \'glints-aries\''}
        </code>
      </p>
    </div>

    <div style={{ marginBottom: '2em' }}>
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
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Collapsible label="Usage" isOpen={false}>
        <pre>
          {`<Swipeable>
  <Swipeable.Item onClick={...}>
      <Component />
  </Swipeable.Item>
  <Swipeable.Item>
      <Component />
  </Swipeable.Item>
</Swipeable>`}
        </pre>
      </Collapsible>
    </div>

    <table className="doc-table">
      <thead>
        <tr style={{ borderBottom: '1px solid lightgrey' }}>
          <th colSpan="6">
            <h3 style={{ margin: '.8em 0' }}>
              <span style={{ fontWeight: '100' }}>Props for</span>
              {' '}
              Swipeable.Item
            </h3>
          </th>
        </tr>
        <tr>
          <th>
            Name
          </th>
          <th>
            Type
          </th>
          <th>
            Default Value
          </th>
          <th>
            Possible Value
          </th>
          <th>
            Required
          </th>
          <th>
            Description
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            onClick
          </td>
          <td>
            function
          </td>
          <td></td>
          <td>
            function
          </td>
          <td>
            no
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default SwipeableStory;
