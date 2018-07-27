import React from 'react';
import Swipeable from '../src/Swipeable';

// Example
import { SwipeableCardExample } from '../src/Style/SwipeableStyle';

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

    <table className="doc-table">
      <thead>
        <tr>
          <th colSpan="0">
            Preview
          </th>
          <th>
            Usage
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: 20 }}>
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
          </td>
          <td>
            <pre>
              {`<Swipeable>
    <Swipeable.Item onClick={...}>
        <YourComponent />
    </Swipeable.Item>
</Swipeable>`}
            </pre>
          </td>
        </tr>
      </tbody>
    </table>

    <h1>
      Props
    </h1>
    <table className="doc-table">
      <thead>
        <tr>
          <th>
            Name
          </th>
          <th>
            Type
          </th>
          <th>
            Value
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
            Function
          </td>
          <td>
            any
          </td>
          <td>
            no
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>

    <h1>
      Note
    </h1>
    <p>
      1. Always wrap your component inside
      {' '}
      <code>
        {'<Swipeable.Item />'}
      </code>
      .
    </p>
    <p>
      2.
      {' '}
      <b>
      Swipeable Component
      </b>
      {' '}
      is only running on mobile web version.
    </p>
  </div>
);

export default SwipeableStory;
