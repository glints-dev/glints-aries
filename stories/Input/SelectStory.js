import React from 'react';

import Select from '../../src/Input/Select';
import Collapsible from '../../src/Display/Collapsible';

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

    <div style={{ marginBottom: '2em' }}>
      <div style={{ width: '300px' }}>
        <Select label="Jobs" noOptionResult="No Result Found.">
          <Select.Option value="accountant">Accountant</Select.Option>
          <Select.Option value="business development">Business Development</Select.Option>
          <Select.Option value="finance">Finance</Select.Option>
          <Select.Option value="software engineer">Software Engineer</Select.Option>
        </Select>
      </div>
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Collapsible label="Usage" isOpen={false}>
        <pre>
          {`const Option = Select.Option;

handleChange = (value) => {
  console.log('selected value: ', value);
}

<Select
  label="Jobs"
  onChange={this.handleChange}
>
  <Option value="accountant">Accountant</Option>
  <Option value="finance">Finance</Option>
</Select>`}
        </pre>
      </Collapsible>
    </div>

    <table className="doc-table">
      <thead>
        <tr style={{ borderBottom: '1px solid lightgrey' }}>
          <th colSpan="7">
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
            Element
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
            label
          </td>
          <td>
            <code>
              {'<Select />'}
            </code>
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
            <pre>
              {`<Select />
<Select.Option />`}
            </pre>
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
            - Sets value for Input and Option.
          </td>
        </tr>
        <tr>
          <td>
            status
          </td>
          <td>
            <code>
              {'<Select />'}
            </code>
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
            Sets different style for Select based on status.
          </td>
        </tr>
        <tr>
          <td>
            disabled
          </td>
          <td>
            <code>
              {'<Select />'}
            </code>
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
            onChange
          </td>
          <td>
            <code>
              {'<Select.Option />'}
            </code>
          </td>
          <td>
            function
          </td>
          <td></td>
          <td>
            function
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
