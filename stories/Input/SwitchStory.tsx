import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import Switch from '../../src/Input/Switch';

const props = {
  Switch: [
    {
      name: 'label',
      type: 'array',
      defaultValue: '',
      possibleValue: 'any',
      require: 'yes',
      description: '',
    },
    {
      name: 'name',
      type: 'array',
      defaultValue: '',
      possibleValue: 'any',
      require: 'yes',
      description: '',
    },
    {
      name: 'value',
      type: 'array',
      defaultValue: '',
      possibleValue: 'any',
      require: 'yes',
      description: '',
    },
    {
      name: 'defaultValue',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'yes',
      description: 'Sets initial value.',
    },
    {
      name: 'onChange',
      type: 'function',
      defaultValue: '',
      possibleValue: 'function',
      require: 'no',
      description: 'Called when Switch is changed.',
    },
  ],
};

const SwitchStory = () => (
  <StorybookComponent
    title="Switch"
    code="import { Switch } from 'glints-aries'"
    propsObject={props}
    usage={`<Switch 
  label={['Full Time', 'Internship']} 
  name={['job-type', 'job-type']}
  value={['full-time', 'internship']} 
  defaultValue="full-time"
/>`}
  >
    <div style={{ width: '300px' }}>
      <Switch
        label={['Full Time', 'Internship']}
        name={['job-type', 'job-type']}
        value={['full-time', 'internship']}
        defaultValue="full-time"
      />
    </div>
  </StorybookComponent>
);

export default SwitchStory;
