import React from 'react';

import Loading from '../../src/General/Loading';
import Collapsible from '../../src/Display/Collapsible';

const LoadingStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Loading
      </h1>
      <p>
        <code>
          {'import { Loading } from \'glints-aries\''}
        </code>
      </p>
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Loading />
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Collapsible label="Usage" isOpen={false}>
        <pre>
          {'<Loading />'}
        </pre>
      </Collapsible>
    </div>
  </div>
);

export default LoadingStory;
