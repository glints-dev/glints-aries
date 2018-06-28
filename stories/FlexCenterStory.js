import React, { Fragment } from 'react';
import FlexCenter from './../src/FlexCenter';

const FlexCenterStory = () => {
  return (
    <div className="doc-mainbar">
      <h1>Center</h1>
      <p>Usage: <code>{`import { FlexCenter } from 'glints-aries'`}</code></p>
      <FlexCenter>
        this is centered
      </FlexCenter>

      <br />
      <br />

      <h1>usage</h1>
      <pre>{`<FlexCenter>this is centered</FlexCenter>`}</pre>
    </div>
  )
}

export default FlexCenterStory;
