import React from 'react';
import Label from './../src/Label';
import { Theme } from '../src/Utils/StyleConfig';

const LabelStory = () => {
  return (
    <div className="doc-mainbar">
      <h1>Label</h1>
      <p>Usage: <code>{`import { Label } from '@glints-dev/glints-aries'`}</code></p>

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
            <td><Label block>Default Label</Label></td>
            <td><pre>{`<Label block>Default Label</Label>`}</pre></td>
          </tr>
          <tr>
            <td><Label block size="medium">medium Label</Label></td>
            <td><pre>{`<Label block size="medium">medium Label</Label>`}</pre></td>
          </tr>
          <tr>
            <td><Label block size="large">large Label</Label></td>
            <td><pre>{`<Label block size="large">large Label</Label>`}</pre></td>
          </tr>
          <tr>
            <td><Label block size="xlarge">xlarge Label</Label></td>
            <td><pre>{`<Label block size="xlarge">xlarge Label</Label>`}</pre></td>
          </tr>
        </tbody>

      </table>

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
