import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import Select from '../../src/Input/Select';

const props = {
  Select: [
    {
      name: 'label',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'yes',
      description: 'Sets placeholder value for the Text Field.',
    },
    {
      name: 'value',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'no',
      description: 'Sets value for Input.',
    },
    {
      name: 'status',
      type: 'string',
      defaultValue: '',
      possibleValue: <code>success | error</code>,
      require: 'no',
      description: 'Sets different style for Select based on status.',
    },
    {
      name: 'isLoading',
      type: 'boolean',
      defaultValue: <code>false</code>,
      possibleValue: <code>true | false</code>,
      require: 'no',
      description: 'Shows loading spinner.',
    },
    {
      name: 'disableTyping',
      type: 'boolean',
      defaultValue: <code>false</code>,
      possibleValue: <code>true | false</code>,
      require: 'no',
      description: "Disable typing on Select input, so the option can't be searched.",
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: <code>false</code>,
      possibleValue: <code>true | false</code>,
      require: 'no',
      description: 'Disable the Text Field.',
    },
    {
      name: 'onChange',
      type: 'function',
      defaultValue: '',
      possibleValue: 'function',
      require: 'no',
      description: 'Called when select an option or value of input is changed.',
    },
    {
      name: 'small',
      type: 'boolean',
      defaultValue: <code>false</code>,
      possibleValue: <code>true | false</code>,
      require: 'no',
      description: 'Sets Select to be smaller.',
    },
    {
      name: 'removeFloatingLabel',
      type: 'boolean',
      defaultValue: <code>false</code>,
      possibleValue: 'any',
      require: 'no',
      description: 'Removes floating effect for placeholder.',
    },
    {
      name: 'removeDropIcon',
      type: 'boolean',
      defaultValue: <code>false</code>,
      possibleValue: <code>true | false</code>,
      require: 'no',
      description: 'Removes drop icon.',
    },
  ],
  'Select.Option': [
    {
      name: 'value',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'yes',
      description: 'Sets value for Option.',
    },
    {
      name: 'onOptionClick',
      type: 'function',
      defaultValue: '',
      possibleValue: 'function',
      require: 'no',
      description: 'Sets onClick for Option.',
    },
  ],
};

const SelectStory = () => (
  <StorybookComponent
    title="Select"
    code="import { Select } from 'glints-aries'"
    propsObject={props}
    usage={`handleChange = (value) => {
  console.log('selected value: ', value);
}
<Select
  label="Jobs"
  onChange={this.handleChange}
>
  <Select.Option value="accountant">Accountant</Select.Option>
  <Select.Option value="finance">Finance</Select.Option>
</Select>`}
  >
    <div style={{ width: '300px' }}>
      <Select
        label="Jobs"
        noOptionResult="No Result Found."
      >
        <Select.Option value="accountant">Accountant</Select.Option>
        <Select.Option value="business development">Business Development</Select.Option>
        <Select.Option value="finance">Finance</Select.Option>
        <Select.Option value="software engineer">Software Engineer</Select.Option>
      </Select>
    </div>
  </StorybookComponent>
);

export default SelectStory;
