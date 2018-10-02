import React from 'react';
import RadioButton from '../../src/Input/RadioButton';

const RadioButtonStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Radio Button
      </h1>
      <p>
        <code>
          {'import { RadioButton } from \'glints-aries\''}
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
            <RadioButton label="Full Time" name="job-type" value="full-time" checked />
            <div style={{ display: 'inline-flex', marginRight: '1em' }} />
            <RadioButton label="Intership" name="job-type" value="intership" />
          </td>
          <td>
            <pre>
              {`<RadioButton 
  label="Full Time" 
  name="job-type" 
  value="full-time" 
  checked 
  />`}
            </pre>
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
            label
          </td>
          <td>
            string
          </td>
          <td>
            any
          </td>
          <td>
            yes
          </td>
          <td>
            Sets the label of radio button.
          </td>
        </tr>
        <tr>
          <td>
            name
          </td>
          <td>
            string
          </td>
          <td>
            any
          </td>
          <td>
            yes
          </td>
          <td></td>
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
            yes
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            checked
          </td>
          <td>
            boolean
          </td>
          <td>
            <pre>
              true | false
            </pre>
          </td>
          <td>
            no
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            theme
          </td>
          <td>
            boolean
          </td>
          <td>
            <code>
              white
            </code>
          </td>
          <td>
            no
          </td>
          <td>
            Default theme is black.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default RadioButtonStory;
