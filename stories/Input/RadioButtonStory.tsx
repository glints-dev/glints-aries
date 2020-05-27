import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import RadioButton from '../../src/Input/RadioButton';

const jsxToString = require('jsx-to-string');

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
      name: 'error',
      type: 'boolean',
      defaultValue: <code>false</code>,
      possibleValue: <code>true | false</code>,
      require: 'no',
      description: 'Displays the error styles',
    },
    {
      name: 'labelProps',
      type: 'object',
      defaultValue: '',
      possibleValue: '',
      require: 'no',
      description: 'Sets the props on the label element.',
    },
    {
      name: 'theme',
      type: 'boolean',
      defaultValue: '',
      possibleValue: <code>white</code>,
      require: 'no',
      description: 'Sets theme for Radio Button.',
    },
  ],
};

const Story = (
  <div>
    <RadioButton label="Full Time" name="job-type" value="full-time" />
    <RadioButton label="Intership" name="job-type" value="intership" error />
  </div>
);

const RadioButtonStory = () => (
  <StorybookComponent
    title="Radio Button"
    code="import { RadioButton } from 'glints-aries'"
    propsObject={props}
    usage={jsxToString(Story)}
  >
    {Story}
  </StorybookComponent>
);

export default RadioButtonStory;
