import React from 'react';
import Select from '../src/Select';

const SelectStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Select
      </h1>
      <p>
        <code>
          {'import { Select } from \'glints-aries\''}
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
            <Select label="Jobs">
              <li>
                Accountant
              </li>
              <li>
                Business Development
              </li>
              <li>
                Finance
              </li>
              <li>
                Software Engineer
              </li>
            </Select>
          </td>
          <td>
            <pre>
              {`
handleChange = (value) => {
  console.log('selected value: ', value);
}

<Select
  label="Jobs"
  onChange={this.handleChange}
>
  <li>...</li>
  <li>...</li>
</Select>`}
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
        <tr>
          <td>
            onChange
          </td>
          <td>
            function
          </td>
          <td>
            -
          </td>
          <td>
            no
          </td>
          <td>
            Called when select an option or value of input is changed.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default SelectStory;
