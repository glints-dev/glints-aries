import React from 'react';
import {Swipeable, SwipeableItem} from './../src/Swipeable';

// Example
import { SwipeableCardExample } from '../src/Style/SwipeableStyle';

const SwipeableStory = () => {
  return (
    <div className="doc-mainbar">
      <div style={{ marginBottom: '2em' }}>
        <h1>Swipeable</h1>
        <p><code>{`import { Swipeable, SwipeableItem } from 'glints-aries'`}</code></p>
      </div>

      <table className="doc-table">
        <thead>
          <tr>
            <th colSpan="0">
              Preview
            </th>
            <th>Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{padding: 20}}>
                <Swipeable>
                    <SwipeableItem>
                        <SwipeableCardExample>
                            <h1>Card.</h1>
                        </SwipeableCardExample>
                    </SwipeableItem>
                    <SwipeableItem>
                        <SwipeableCardExample>
                            <h1>Card.</h1>
                        </SwipeableCardExample>
                    </SwipeableItem>
                    <SwipeableItem>
                        <SwipeableCardExample>
                            <h1>Card.</h1>
                        </SwipeableCardExample>
                    </SwipeableItem>
                    <SwipeableItem>
                        <SwipeableCardExample>
                            <h1>Card.</h1>
                        </SwipeableCardExample>
                    </SwipeableItem>
                </Swipeable>
            </td>
            <td><pre>{`<Swipeable>
    <SwipeableItem>
        <YourComponent />
    </SwipeableItem>
</Swipeable>`}</pre></td>
          </tr>
        </tbody>
      </table>

      <h1>Note</h1>
      <p>1. Always wrap your component inside <code>{`<SwipeableItem />`}</code>.</p>
      <p>2. <b>Swipeable Component</b> is only running on mobile web version.</p>
    </div>
  );
}

export default SwipeableStory;
