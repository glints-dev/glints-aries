import React from 'react';
import Label from './../src/Label';
import { Theme } from '../src/Utils/StyleConfig';

const LabelStory = () => {
  return (
    <div className="doc-mainbar">
      <h1>Glints Label</h1>
      <p>usage: <code>{`import { Label } from '@glints-dev/glints-aries'`}</code></p>

      <Label block size="small">small Label</Label>
      <Label block>Default Label</Label>
      <Label block size="medium">medium Label</Label>
      <Label block size="large">large Label</Label>
      <Label block size="xlarge">xlarge Label</Label>

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
              <Label theme={Theme.SECONDARY}>Secondary Label</Label>
            </td>
            <td><code>{`<Label theme="secondary">Secondary Label</Label>`}</code></td>
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
            <td><code>{`<Label theme="blue">Blue Label</Label>`}</code></td>
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
            <td>theme</td>
            <td><code>string</code></td>
            <td><pre>{`'red' | 'yellow' | 'blue'`}</pre></td>
          </tr>
          <tr>
            <td>size</td>
            <td><code>string</code></td>
            <td><pre>{`'small' | 'medium' | 'large' | 'xlarge`}</pre></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default LabelStory;
