import React from 'react';

import TextField from '../../src/Input/TextField';
import Heading from '../../src/General/Heading';
import Collapsible from '../../src/Display/Collapsible';
import Divider from '../../src/General/Divider';

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

    <div style={{ marginBottom: '2em' }}>
      <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>Text</Heading>
      <div style={{ width: '300px' }}>
        <TextField type="text" label="Username" />
      </div>
    </div>

    <div style={{ marginBottom: '4em' }}>
      <Collapsible label="Usage" isOpen={false}>
        <pre>
          {'<TextField type="text" label="Username" value="..." />'}
        </pre>
      </Collapsible>
    </div>

    <Divider theme="grey" />

    <div style={{ marginTop: '4em', marginBottom: '2em' }}>
      <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>Password</Heading>
      <div style={{ width: '300px' }}>
        <TextField type="password" label="Password" />
      </div>
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Collapsible label="Usage" isOpen={false}>
        <pre>
          {'<TextField type="password" label="Password" value="..." />'}
        </pre>
      </Collapsible>
    </div>

    <table className="doc-table">
      <thead>
        <tr style={{ borderBottom: '1px solid lightgrey' }}>
          <th colSpan="6">
            <h3 style={{ margin: '.8em 0' }}>
              Props
            </h3>
          </th>
        </tr>
        <tr>
          <th>
            Name
          </th>
          <th>
            Type
          </th>
          <th>
            Default Value
          </th>
          <th>
            Possible Value
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
              text
            </code>
          </td>
          <td>
            <code>
              text | password
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
          <td></td>
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
          <td></td>
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
          <td></td>
          <td>
            <code>
              success | error
            </code>
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
            <code>
              false
            </code>
          </td>
          <td>
            <code>
              true | false
            </code>
          </td>
          <td>
            no
          </td>
          <td>
            Disable the Text Field.
          </td>
        </tr>
        <tr>
          <td>
            small
          </td>
          <td>
            boolean
          </td>
          <td>
            <code>
              false
            </code>
          </td>
          <td>
            <code>
              true | false
            </code>
          </td>
          <td>
            no
          </td>
          <td>
            Sets TextField to be smaller.
          </td>
        </tr>
        <tr>
          <td>
            removeFloatingLabel
          </td>
          <td>
            boolean
          </td>
          <td>
            <code>
              false
            </code>
          </td>
          <td>
            <code>
              true | false
            </code>
          </td>
          <td>
            no
          </td>
          <td>
            Removes floating effect for placeholder.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default TextFieldStory;
