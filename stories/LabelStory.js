import React from 'react';
import Label from './../src/Label';
import { Theme } from '../src/Utils/StyleConfig';

const LabelStory = () => {
  return (
    <div className="doc-mainbar">
      <h1>Glints Label</h1>
      <p>usage: <code>{`import { Label } from '@glints-dev/glints-aries'`}</code></p>

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
              <Label>Default Label</Label>
            </td>
            <td><code>{`<Label>No Variant Label</Label>`}</code></td>
          </tr>
          <tr>
            <td style={{padding: 20}}>
              <Label theme={Theme.RED}>Red Label</Label>
            </td>
            <td><code>{`<Label theme="red">Danger Label</Label>`}</code></td>
          </tr>
          <tr>
            <td style={{padding: 20}}>
              <Label theme={Theme.YELLOW}>Yellow Label</Label>
            </td>
            <td><code>{`<Label theme="yellow">Warning Label</Label>`}</code></td>
          </tr>
          <tr>
            <td style={{padding: 20}}>
              <Label theme={Theme.BLUE}>Blue Label</Label>
            </td>
            <td><code>{`<Label variant="blue">Blue Label</Label>`}</code></td>
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
