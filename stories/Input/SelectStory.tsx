import * as React from 'react';
const jsxToString = require('jsx-to-string');

import StorybookComponent from '../StorybookComponent';

import Select from '../../src/Input/Select';

const props = {
  Select: [
    {
      name: 'label',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'no',
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
      possibleValue: <code>error</code>,
      require: 'no',
      description:
        '(DEPRECATED) Sets different style for Select based on status.',
    },
    {
      name: 'error',
      type: 'ReactNode | boolean | string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'no',
      description: `WARNING: Don't customize error message style when passing ReactNode, pass true to display error state without error message`,
    },
    {
      name: 'renderError',
      type: 'ReactNode',
      defaultValue: '<span color="#EC272B" />',
      possibleValue: 'any',
      require: 'no',
      description: `(DEPRECATED) please use error instead`,
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
      description:
        "Disable typing on Select input, so the option can't be searched.",
    },
    {
      name: 'autoComplete',
      type: 'string',
      defaultValue: '',
      possibleValue: 'nope',
      require: 'no',
      description:
        'To disable browser auto complete, pass "nope" or anything other than "off".',
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
      name: 'noOptionResult',
      type: 'string',
      defaultValue: 'No results found',
      possibleValue: 'any',
      require: 'no',
      description: 'Sets value to display when no options are returned.',
    },
    {
      name: 'onChange',
      type: '(value: string) => void',
      defaultValue: '',
      possibleValue: 'function',
      require: 'no',
      description:
        'Called when select an option or value of input is changed. WARNING: firing on value of input is changed will be deprecated',
    },
    {
      name: 'onInputChange',
      type: '(e: React.ChangeEvent<HTMLInputElement>) => void',
      defaultValue: '',
      possibleValue: 'function',
      require: 'no',
      description: 'Called when value of input is changed.',
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
    {
      name: 'defaultOpen',
      type: 'boolean',
      defaultValue: <code>false</code>,
      possibleValue: <code>true | false</code>,
      require: 'no',
      description: 'Sets initial open state of Select.',
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

const Story = (
  <div>
    <div style={{ marginBottom: '1rem' }}>2 sizes only</div>
    <div style={{ width: '300px', marginBottom: '1rem' }}>
      <Select
        label="Jobs"
        small={true}
        removeFloatingLabel={true}
        disableTyping={true}
      >
        <Select.Option value="accountant">Accountant</Select.Option>
        <Select.Option value="business development">
          Business Development
        </Select.Option>
        <Select.Option value="software engineer">
          Software Engineer
        </Select.Option>
      </Select>
    </div>
    <div style={{ width: '300px', marginBottom: '3rem' }}>
      <Select label="Jobs" autoComplete="nope">
        <Select.Option value="accountant">Accountant</Select.Option>
        <Select.Option value="business development">
          Business Development
        </Select.Option>
        <Select.Option value="software engineer">
          Software Engineer
        </Select.Option>
      </Select>
    </div>
    <div style={{ marginBottom: '1rem' }}>
      2 error states only, error message is optional, do not customize error
      message style
    </div>
    <div style={{ width: '300px', marginBottom: '1rem' }}>
      <Select label="Jobs" error={true}>
        <Select.Option value="accountant">Accountant</Select.Option>
        <Select.Option value="business development">
          Business Development
        </Select.Option>
        <Select.Option value="software engineer">
          Software Engineer
        </Select.Option>
      </Select>
    </div>
    <div style={{ width: '300px', marginBottom: '3rem' }}>
      <Select label="Jobs" error="I am an error message 🙀">
        <Select.Option value="accountant">Accountant</Select.Option>
        <Select.Option value="business development">
          Business Development
        </Select.Option>
        <Select.Option value="software engineer">
          Software Engineer
        </Select.Option>
      </Select>
    </div>
    <div style={{ marginBottom: '1rem' }}>
      Examples when the text fields are disabled
    </div>
    <div style={{ width: '300px', marginBottom: '1rem' }}>
      <Select label="Jobs" small={true} disabled={true}>
        <Select.Option value="accountant">Accountant</Select.Option>
        <Select.Option value="business development">
          Business Development
        </Select.Option>
        <Select.Option value="software engineer">
          Software Engineer
        </Select.Option>
      </Select>
    </div>
    <div style={{ width: '300px' }}>
      <Select
        label="Jobs"
        small={true}
        disabled={true}
        value="Business Development"
      >
        <Select.Option value="accountant">Accountant</Select.Option>
        <Select.Option value="business development">
          Business Development
        </Select.Option>
        <Select.Option value="software engineer">
          Software Engineer
        </Select.Option>
      </Select>
    </div>
  </div>
);

const SelectStory = () => {
  return (
    <StorybookComponent
      title="Select"
      code="import { Select } from 'glints-aries'"
      propsObject={props}
      usage={jsxToString(Story)}
    >
      <div>{Story}</div>
    </StorybookComponent>
  );
};

export default SelectStory;
