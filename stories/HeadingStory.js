import React from 'react';
import Heading from './../src/Heading';
import { Size } from '../src/Utils/StyleConfig';

const HeadingStory = () => {
  return (
    <div className="doc-mainbar">
      <h1>Heading</h1>
      <p><code>{`import { Heading } from 'glints-aries'`}</code></p>

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
              <Heading size={Size.LARGE}>Large Heading</Heading>
            </td>
            <td><code>{`<Heading size="large">Large Heading</Heading>`}</code></td>
          </tr>
          <tr>
            <td style={{padding: 20}}>
              <Heading size={Size.MEDIUM}>Medium Heading</Heading>
            </td>
            <td><code>{`<Heading size="medium">Medium Heading</Heading>`}</code></td>
          </tr>
          <tr>
            <td style={{padding: 20}}>
              <Heading size={Size.SMALL}>Small Heading</Heading>
            </td>
            <td><code>{`<Heading size="small">Small Heading</Heading>`}</code></td>
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

export default HeadingStory;
