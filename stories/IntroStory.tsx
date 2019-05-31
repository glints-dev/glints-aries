import * as React from 'react';

const IntroStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2.5em' }}>
      <h1>
        Glints Aries
        <span style={{ fontWeight: 'normal', fontSize: '14px', marginLeft: '.6em' }}>v3.0.26</span>
      </h1>
      <p style={{ paddingRight: '25%' }}>
        We proudly present to you Glints Aries made by Front End Engineers of Glints. It is a Frontend framework to simplify and speed up your development. This project rebuilt with React and Styled Components. We are still actively develop this project day by day. So there are still a ton of amazing components to be built.
      </p>
    </div>

    <div style={{ marginBottom: '2.5em' }}>
      <h3 style={{ marginBottom: '.5em' }}>
        Installation
      </h3>
      <p>
        <code>
          npm install -S glints-aries
        </code>
      </p>
    </div>

    <div style={{ marginBottom: '2.5em' }}>
      <h3 style={{ marginBottom: '.5em' }}>
        How to use
      </h3>
      <div style={{ marginBottom: '1em' }}>
        <p>
        Import the component into your file.
          <br />
          <code>
            {'import { ... } from \'glints-aries\''}
          </code>
        </p>
      </div>
      <div>
        <p>
          {'Before you start using the components, it\'s better to always wrap your root component with'}
          {' '}
          {'<GlintsContainer/>'}
          .
          <br />
          {' '}
          We created that Container to adapt with every screen sizes, so Users will always have best experience whenever they visit your site from their devices.
          <br />
          GlintsContainer is also the global style for glints-aries component.
          <br />
          {' '}
          For more details, you can read this at
          {' '}
          <b>
          Utilities
          </b>
          , then
          {' '}
          <b>
          GlintsContainer
          </b>
          {' '}
          section.
        </p>
        <pre style={{ display: 'inline-flex' }}>
          {`import { GlintsContainer } from 'glints-aries'

<GlintsContainer>
  <Component />
</GlintsContainer>`}
        </pre>
      </div>
    </div>
  </div>
);

export default IntroStory;
