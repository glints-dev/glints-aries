import React from 'react';
import TextField from './../src/TextField';

const TextFieldStory = () => {
  return (
    <div className="doc-mainbar">
      <h1>Text Field</h1>
      <p><code>{`import { TextField } from 'glints-aries'`}</code></p>
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
              <TextField label="Username" inputWidth="100" />
            </td>
            <td><code>{`<TextField label="Username" inputWidth="100" />`}</code></td>
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
            <td>label</td>
            <td>string</td>
            <td>any</td>
            <td>no</td>
            <td>Sets placeholder value for the Text Field.</td>
          </tr>
          <tr>
            <td>inputWidth</td>
            <td>string</td>
            <td><pre>{`0 - 100`}</pre></td>
            <td>no</td>
            <td>Sets width for the Text Field.</td>
          </tr>
          <tr>
            <td>status</td>
            <td>string</td>
            <td>
              <pre>{`success | error`}</pre>
            </td>
            <td>no</td>
            <td>Sets different style for the Text Field based on status.</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>boolean</td>
            <td>
              <pre>{`true | false`}</pre>
            </td>
            <td>no</td>
            <td>Disable the Text Field.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TextFieldStory;