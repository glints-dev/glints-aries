import React from 'react';
import Tabs from '../src/Tabs';

const TabsStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Tabs
      </h1>
      <p>
        <code>
          {'import { Tag } from \'glints-aries\''}
        </code>
      </p>
    </div>

    <Tabs>
      <div label="Gator">
        See ya later,
        {' '}
        <em>
          Alligator
        </em>
        !
      </div>
      <div label="Croc">
        After &apos;while,
        {' '}
        <em>
          Crocodile
        </em>
        !
      </div>
      <div label="Sarcosuchus">
        Nothing to see here, this tab is
        {' '}
        <em>
          extinct
        </em>
        !
      </div>
    </Tabs>

  </div>
);

export default TabsStory;
