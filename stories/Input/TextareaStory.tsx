import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import Textarea from '../../src/Input/Textarea';

const props = {
  Textarea: [
    {
      name: 'label',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'no',
      description: 'Sets title for Textarea.',
    },
    {
      name: 'value',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'no',
      description: 'Sets default value of Textarea.',
    },
    {
      name: 'status',
      type: 'string',
      defaultValue: '',
      possibleValue: <code>success | error</code>,
      require: 'no',
      description: 'Sets different style for the Textarea based on status.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: <code>false</code>,
      possibleValue: <code>true | false</code>,
      require: 'no',
      description: 'Disable Textarea.',
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

const TextareaStory = () => (
  <StorybookComponent
    title="Textarea"
    code="import { Textarea } from 'glints-aries'"
    propsObject={props}
    usage={'<Textarea label="Job" />'}
  >
    <div style={{ width: '300px' }}>
      <Textarea label="Job" />
    </div>
  </StorybookComponent>
);

export default TextareaStory;
