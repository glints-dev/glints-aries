import React from 'react';
import Label from './../src/Label';

const LabelStory = () => {
  return (
    <div className="doc-mainbar">
      <h1>Glints Label</h1>
      <p>usage: <code>{`import { Label } from glints-aries`}</code></p>

      <table className="doc-table">
        <thead>
          <tr>
            <th colSpan="0">
              props: <code>variant</code>
            </th>
            <th>usage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{padding: 20}}>
              <Label>No variant Label</Label>
            </td>
            <td><code>{`<Label>No variant Label</Label>`}</code></td>
          </tr>
          <tr>
            <td style={{padding: 20}}>
              <Label variant="secondary">secondary Label</Label>
            </td>
            <td><code>{`<Label variant="secondary">secondary Label</Label>`}</code></td>
          </tr>
          <tr>
            <td style={{padding: 20}}>
              <Label variant="primary">Primary Label</Label>
            </td>
            <td><code>{`<Label variant="primary">Primary Label</Label>`}</code></td>
          </tr>
          <tr>
            <td style={{padding: 20}}>
              <Label variant="danger">danger Label</Label>
            </td>
            <td><code>{`<Label variant="danger">danger Label</Label>`}</code></td>
          </tr>
          <tr>
            <td style={{padding: 20}}>
              <Label variant="warning">warning Label</Label>
            </td>
            <td><code>{`<Label variant="warning">warning Label</Label>`}</code></td>
          </tr>
        </tbody>
      </table>

      <h1>Available Props</h1>
      <table className="doc-table">
        <thead>
          <tr>
            <th>
              Name
            </th>
            <th>type</th>
            <th>value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>variant</td>
            <td>string</td>
            <td><pre>{`'primary' | 'secondary' | 'warning' | 'danger'`}</pre></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default LabelStory;
