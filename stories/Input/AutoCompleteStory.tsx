import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import AutoComplete from '../../src/Input/AutoComplete';

const props = {
  AutoComplete: [
    {
      name: 'label',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'no',
      description: 'Sets AutoComplete\'s placeholder',
    },
    {
      name: 'value',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'no',
      description: 'Sets default value for Input.',
    },
    {
      name: 'status',
      type: 'string',
      defaultValue: '',
      possibleValue: <code>success | error</code>,
      require: 'no',
      description: 'Sets different style for AutoComplete based on status.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: <code>false</code>,
      possibleValue: <code>true | false</code>,
      require: 'no',
      description: 'Disable AutoComplete\'s input',
    },
    {
      name: 'onChange',
      type: 'function',
      defaultValue: '',
      possibleValue: 'function',
      require: 'no',
      description: 'Called when select an option or input\'s value is changed.',
    },
    {
      name: 'small',
      type: 'boolean',
      defaultValue: <code>false</code>,
      possibleValue: <code>true | false</code>,
      require: 'no',
      description: 'Sets AutoComplete to be smaller.',
    },
    {
      name: 'removeFloatingLabel',
      type: 'boolean',
      defaultValue: <code>false</code>,
      possibleValue: <code>true | false</code>,
      require: 'no',
      description: 'Removes floating effect for placeholder.',
    },
  ],
  'AutoComplete.Option': [
    {
      name: 'value',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'no',
      description: 'Sets value for Option.',
    },
    {
      name: 'additionalInfo',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'no',
      description: 'Sets another info beside Option main value.',
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

const AutoCompleteStory = () => (
  <StorybookComponent
    title="AutoComplete"
    code="import { AutoComplete } from 'glints-aries'"
    propsObject={props}
    usage={`handleChange = (value) => {
  console.log('selected value: ', value);
}

<AutoComplete
  label="Location"
  onChange={this.handleChange}
>
  <AutoComplete.Option value="accountant" additionalInfo="3000">Accountant</AutoComplete.Option>
  <AutoComplete.Option value="architecture" additionalInfo="800">Architecture</AutoComplete.Option>
  <AutoComplete.Option value="business development" additionalInfo="1203">Business Development</AutoComplete.Option>
  <AutoComplete.Option value="product manager" additionalInfo="200">Product Manager</AutoComplete.Option>
  <AutoComplete.Option value="project manager" additionalInfo="50">Project Manager</AutoComplete.Option>
</AutoComplete>`}
  >
    <div style={{ width: '300px' }}>
      <AutoComplete label="Location">
        <AutoComplete.Option value="accountant" additionalInfo="3000">Accountant</AutoComplete.Option>
        <AutoComplete.Option value="architecture" additionalInfo="800">Architecture</AutoComplete.Option>
        <AutoComplete.Option value="business development" additionalInfo="1203">Business Development</AutoComplete.Option>
        <AutoComplete.Option value="product manager" additionalInfo="200">Product Manager</AutoComplete.Option>
        <AutoComplete.Option value="project manager" additionalInfo="50">Project Manager</AutoComplete.Option>
      </AutoComplete>
    </div>
  </StorybookComponent>
);

export default AutoCompleteStory;
