import React from 'react';
import OmniSearch from '../src/OmniSearch';

const OmniSearchStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Omni Search
      </h1>
      <p>
        <code>
          {'import { OmniSearch } from \'glints-aries\''}
        </code>
      </p>
    </div>

    <OmniSearch />

  </div>
);

export default OmniSearchStory;
