import React from 'react';
import Slider from './../src/Slider';

const SliderStory = () => {
  return (
    <div className="doc-mainbar">
      <h1>Slider</h1>
      <p><code>{`import { Slider } from 'glints-aries'`}</code></p>

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
              <Slider />
            </td>
            <td><code>{`<Slider />`}</code></td>
          </tr>
        </tbody>
      </table>

      <h1>Props</h1>
      <table className="doc-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Value</th>
            <th>Required</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>size</td>
            <td>string</td>
            <td><pre>{`large | medium | small`}</pre></td>
            <td>yes</td>
            <td>Sets the size of heading.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SliderStory;
