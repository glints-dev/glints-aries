import React from 'react';

const IntroStory = () => {
  return (
    <div className="doc-mainbar">
      <h1>Glints Aries</h1>
      <p>This project is made with React and Styled-Component.</p>
      <h3>Installation</h3>
      <p><code>{`npm install -S glints-aries`}</code></p>
      <h3>How to use</h3>
      <p>You can override the style with your own styling by simply put a className or id on the component.</p>
      <p>Example:
        <code>{`<Heading className="overrideHeading" size="small">Small Heading</Heading>`}</code>
      </p>
      <pre style={{backgroundColor: 'transparent', display: 'inline-block', margin: '1em 0'}}>
        {
          `.yourClass {
  .overrideHeading { your override style goes here ... }
}`
        }
      </pre>

    </div>
  );
}

export default IntroStory;