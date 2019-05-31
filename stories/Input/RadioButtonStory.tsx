import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import RadioButton from '../../src/Input/RadioButton';

const props = {
  RadioButton: [
    {
      name: 'label',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'yes',
      description: 'Sets the label of Radio Button.',
    },
    {
      name: 'name',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'yes',
      description: '',
    },
    {
      name: 'value',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'yes',
      description: '',
    },
    {
      name: 'checked',
      type: 'boolean',
      defaultValue: <code>false</code>,
      possibleValue: <code>true | false</code>,
      require: 'no',
      description: '',
    },
    {
      name: 'theme',
      type: 'boolean',
      defaultValue: <code>black</code>,
      possibleValue: <code>white</code>,
      require: 'no',
      description: 'Sets theme for Radio Button.',
    },
  ],
};

const RadioButtonStory = () => (
  <StorybookComponent
    title="Radio Button"
    code="import { RadioButton } from 'glints-aries'"
    propsObject={props}
    usage={`<RadioButton 
  label="Full Time" 
  name="job-type" 
  value="full-time"
/>`}
  >
    <RadioButton label="Full Time" name="job-type" value="full-time" />
    <div style={{ display: 'inline-flex', marginRight: '1em' }} />
    <RadioButton label="Intership" name="job-type" value="intership" />
  </StorybookComponent>
);

export default RadioButtonStory;
