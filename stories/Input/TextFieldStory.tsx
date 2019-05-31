import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import TextField from '../../src/Input/TextField';
import Heading from '../../src/General/Heading';
import Divider from '../../src/General/Divider';

const props = {
  TextField: [
    {
      name: 'type',
      type: 'string',
      defaultValue: <code>text</code>,
      possibleValue: <code>text | password</code>,
      require: 'yes',
      description: 'Sets the type of Text Field.',
    },
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
      description: 'Sets value of Text Field.',
    },
    {
      name: 'status',
      type: 'string',
      defaultValue: '',
      possibleValue: <code>success | error</code>,
      require: 'no',
      description: 'Sets different style for the Text Field based on status.',
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
      name: 'small',
      type: 'boolean',
      defaultValue: <code>false</code>,
      possibleValue: <code>true | false</code>,
      require: 'no',
      description: 'Sets TextField to be smaller.',
    },
    {
      name: 'disableTyping',
      type: 'boolean',
      defaultValue: <code>false</code>,
      possibleValue: <code>true | false</code>,
      require: 'no',
      description: 'Disable from typing on input field.',
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
};

const TextFieldStory = () => (
  <React.Fragment>
    <StorybookComponent
      title="Text Field"
      code="import { TextField } from 'glints-aries'"
      usage={'<TextField type="text" label="Username" />'}
    >
      <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>Text</Heading>
      <div style={{ width: '300px' }}>
        <TextField type="text" label="Username" />
      </div>
    </StorybookComponent>

    <Divider theme="grey" />

    <StorybookComponent
      propsObject={props}
      usage={'<TextField type="password" label="Password" value="..." />'}
    >
      <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>Password</Heading>
      <div style={{ width: '300px' }}>
        <TextField type="password" label="Password" />
      </div>
    </StorybookComponent>
  </React.Fragment>
);

export default TextFieldStory;
