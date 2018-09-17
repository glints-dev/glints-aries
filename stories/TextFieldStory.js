import React from 'react';
import TextField from '../src/TextField';

const TextFieldStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Text Field
      </h1>
      <p>
        <code>
          {'import { TextField } from \'glints-aries\''}
        </code>
      </p>
    </div>

    <table className="doc-table">
      <thead>
        <tr>
          <th colSpan="0">
              Preview
          </th>
          <th>
            Usage
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: 20 }}>
            <TextField type="text" label="Username" />
          </td>
          <td>
            <code>
              {'<TextField type="text" label="Username" value="..." />'}
            </code>
          </td>
        </tr>
        <tr>
          <td style={{ padding: 20 }}>
            <TextField type="password" label="Password" />
          </td>
          <td>
            <code>
              {'<TextField type="password" label="Password" value="..." />'}
            </code>
          </td>
        </tr>
      </tbody>
    </table>

    <h1>
      Props
    </h1>
    <table className="doc-table">
      <thead>
        <tr>
          <th>
            Name
          </th>
          <th>
            Type
          </th>
          <th>
            Value
          </th>
          <th>
            Required
          </th>
          <th>
            Description
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            type
          </td>
          <td>
            string
          </td>
          <td>
            <code>
              {'text | password'}
            </code>
          </td>
          <td>
            no
          </td>
          <td>
            Sets the type of Text Field.
          </td>
        </tr>
        <tr>
          <td>
            label
          </td>
          <td>
            string
          </td>
          <td>
            any
          </td>
          <td>
            no
          </td>
          <td>
            Sets placeholder value for the Text Field.
          </td>
        </tr>
        <tr>
          <td>
            value
          </td>
          <td>
            string
          </td>
          <td>
            any
          </td>
          <td>
            no
          </td>
          <td>
            Sets value of Text Field.
          </td>
        </tr>
        <tr>
          <td>
            status
          </td>
          <td>
            string
          </td>
          <td>
            <pre>
              success | error
            </pre>
          </td>
          <td>
            no
          </td>
          <td>
            Sets different style for the Text Field based on status.
          </td>
        </tr>
        <tr>
          <td>
            disabled
          </td>
          <td>
            boolean
          </td>
          <td>
            <pre>
              {'true | false'}
            </pre>
          </td>
          <td>
            no
          </td>
          <td>
            Disable the Text Field.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default TextFieldStory;
