import React from 'react';

const GlintsContainerStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Glints Container
      </h1>
      <p>
        <code>
          {'import { GlintsContainer } from \'glints-aries\''}
        </code>
      </p>
    </div>

    <div>
      <p style={{ marginBottom: '.5em' }}>
        Glints Aries is using
        {' '}
        {'<GlintsContainer />'}
        {' '}
        to wrap up the Global Style.
      </p>
      <p style={{ marginBottom: '2em' }}>
        We prevent clash between Glints Aries and your existing styling with
        {' '}
        {'<GlintsContainer />'}
        .
      </p>
      <h3>
        How to use it?
      </h3>
      <p style={{ marginBottom: '.5em' }}>
        You just need to wrap
        {' '}
        {'<GlintsContainer />'}
        {' '}
        on your Root Component or on Glints Aries component.
      </p>
      <pre style={{ display: 'inline-flex' }}>
        {`<GlintsContainer>
  <Component />
</GlintsContainer>`}
      </pre>
    </div>
  </div>
);

export default GlintsContainerStory;
