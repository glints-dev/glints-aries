import React from 'react';
import Divider from './../src/Divider';

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
              <Divider size="large" theme="yellow" thickness="thick" />
            </td>
            <td><code>{`<Divider size="large" theme="yellow" thickness="thick" />`}</code></td>
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
                <td>theme</td>
                <td>string</td>
                <td><pre>{`red | blue | yellow | grey`}</pre></td>
                <td>no</td>
                <td>Sets the color.</td>
            </tr>
            <tr>
                <td>size</td>
                <td>string</td>
                <td><pre>{`large | medium | small`}</pre></td>
                <td>yes</td>
                <td>Sets the width.</td>
            </tr>
            <tr>
                <td>thickness</td>
                <td>string</td>
                <td><pre>{`thick | normal | thin`}</pre></td>
                <td>no</td>
                <td>Sets the Divider thickness.</td>
            </tr>
        </tbody>
      </table>
    </div>
  );
}

export default HeadingStory;
