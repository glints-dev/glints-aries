import * as React from 'react';
import styled from 'styled-components';

import StorybookComponent from '../StorybookComponent';

import RadioButton from '../../src/Input/RadioButton';
import Divider from '../../src/General/Divider';

const Row = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto auto auto;
  grid-column-gap: 10px;
`;

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
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: <code>false</code>,
      possibleValue: <code>true | false</code>,
      require: 'no',
      description: 'Sets Radio Button to disable state.',
    },
  ],
};

const Story = (
  <Row>
    <RadioButton label="Full Time" name="job-type" value="full-time" />
    <RadioButton label="Intership" name="job-type" value="intership" error />
    <RadioButton label="Disabled" name="disabled" value="disabled" disabled />
    <RadioButton
      label="Disabled selection"
      name="disabled"
      value="disabled-selection"
      disabled
      checked
    />
  </Row>
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

const RadioButtonWithBorderStory = () => {
  const props = {
    RadioButton: [
      {
        name: 'border',
        type: 'boolean',
        defaultValue: <code>false</code>,
        possibleValue: <code>true | false</code>,
        require: 'no',
        description: 'Sets a border around the Radio Button.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        defaultValue: <code>false</code>,
        possibleValue: <code>true | false</code>,
        require: 'no',
        description: 'Sets Radio Button to disable state.',
      },
    ],
  };

  return (
    <StorybookComponent title="Radio Button with Border" propsObject={props}>
      <Row>
        <RadioButton label="Full Time" name="border" value="full-time" border />
        <RadioButton label="Intership" name="border" value="intership" border />
        <RadioButton
          label="Disabled"
          name="disabled-border"
          value="disabled"
          disabled
          border
        />
        <RadioButton
          label="Disabled selection"
          name="disabled-border"
          value="disabled-selection"
          disabled
          border
          checked
        />
      </Row>
    </StorybookComponent>
  );
};

const RadioButtonStories = () => (
  <>
    <RadioButtonStory />
    <Divider theme="grey" />
    <RadioButtonWithBorderStory />
  </>
);

export default RadioButtonStories;
