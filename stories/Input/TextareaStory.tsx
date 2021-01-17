import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import Textarea from '../../src/Input/Textarea';
import Divider from '../../src/General/Divider';
import Heading from '../../src/General/Heading';

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
    {
      name: 'small',
      type: 'boolean',
      defaultValue: <code>false</code>,
      possibleValue: <code>true | false</code>,
      require: 'no',
      description: 'Sets the size of the text area.',
    },
  ],
};

const TextareaStory = () => (
  <>
    <StorybookComponent
      title="Textarea"
      code="import { Textarea } from 'glints-aries'"
      propsObject={props}
      usage={'<Textarea label="Description" removeFloatingLabel={true} />'}
    >
      <div style={{ width: '300px' }}>
        <Textarea label="Description" removeFloatingLabel={true} />
      </div>
    </StorybookComponent>
    <Divider theme="grey" />
    <StorybookComponent
      propsObject={props}
      usage={
        '<Textarea label="Description" status="error" removeFloatingLabel={true} />'
      }
    >
      <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>
        Text Area In Error State
      </Heading>
      <div style={{ width: '300px' }}>
        <Textarea
          label="Description"
          status="error"
          removeFloatingLabel={true}
        />
      </div>
    </StorybookComponent>
    <Divider theme="grey" />
    <StorybookComponent
      propsObject={props}
      usage={'<Textarea label="Description"  />'}
    >
      <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>
        Text Area With Floating Label
      </Heading>
      <div style={{ width: '300px' }}>
        <Textarea label="Description" />
      </div>
    </StorybookComponent>
    <Divider theme="grey" />
    <StorybookComponent
      propsObject={props}
      usage={
        '<Textarea label="Description" small={true} removeFloatingLabel={true}  />'
      }
    >
      <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>
        Small Text Area
      </Heading>
      <div style={{ width: '300px' }}>
        <Textarea label="Description" small={true} removeFloatingLabel={true} />
      </div>
    </StorybookComponent>
  </>
);

export default TextareaStory;
