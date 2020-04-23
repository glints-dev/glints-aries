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
      description:
        'Sets error state on component. If string, the error will be shown below the select',
    },
    {
      name: 'renderError',
      type: 'ReactNode',
      defaultValue: '<span color="#EC272B" />',
      possibleValue: 'any',
      require: 'no',
      description:
        'Replaces the default error component. Receives `error` as children.',
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

const Story = (
  <div>
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
    <div style={{ width: '300px', marginBottom: '1rem' }}>
      <Select label="Jobs">
        <Select.Option value="accountant">Accountant</Select.Option>
        <Select.Option value="business development">
          Business Development
        </Select.Option>
        <Select.Option value="software engineer">
          Software Engineer
        </Select.Option>
      </Select>
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
    <div style={{ width: '300px' }}>
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
    <div style={{ width: '300px' }}>
      <Select label="Jobs" error={<strong>I am a custom error</strong>}>
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
        error="🎂 I am a custom error message"
        renderError={error => (
          <div style={{ color: 'orange', textAlign: 'right' }}>{error}</div>
        )}
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
      <div style={{ width: '300px' }}>{Story}</div>
    </StorybookComponent>
  );
};

export default SelectStory;
