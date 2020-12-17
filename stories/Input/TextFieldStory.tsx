import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import TextField from '../../src/Input/TextField';
import Heading from '../../src/General/Heading';
import Divider from '../../src/General/Divider';
import SearchIcon from '../../src/General/Icon/components/SearchIcon';

export const props = {
  TextField: [
    {
      name: 'type',
      type: 'string',
      defaultValue: <code>text</code>,
      possibleValue: <code>text | password | number</code>,
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

const TextFieldStory = () => {
  const [textValue, setTextValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');

  return (
    <React.Fragment>
      <StorybookComponent
        title="Text Field"
        code="import { TextField } from 'glints-aries'"
        usage={
          '<TextField type="text" label="Username" removeFloatingLabel={true} />'
        }
      >
        <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>
          Text
        </Heading>
        <div style={{ width: '300px' }}>
          <TextField
            type="text"
            label="Username"
            value={textValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTextValue(e.target.value)
            }
            removeFloatingLabel={true}
          />
        </div>
      </StorybookComponent>

      <Divider theme="grey" />

      <StorybookComponent
        propsObject={props}
        usage={
          '<TextField type="password" label="Password" value="..."  removeFloatingLabel={true} />'
        }
      >
        <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>
          Password
        </Heading>
        <div style={{ width: '300px' }}>
          <TextField
            type="password"
            label="Password"
            value={passwordValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPasswordValue(e.target.value)
            }
            removeFloatingLabel={true}
          />
        </div>
      </StorybookComponent>
    </React.Fragment>
  );
};

const TextFieldWithClearIconStory = () => {
  const props = {
    TextField: [
      {
        name: 'allowClear',
        type: 'boolean',
        defaultValue: <code>false</code>,
        possibleValue: <code>true | false</code>,
        require: 'no',
        description:
          'If allow to remove input content with clear icon. Works for type "text" only.',
      },
    ],
  };

  const [textWithClearIconValue, setTextWithClearIconValue] = React.useState(
    ''
  );

  return (
    <StorybookComponent
      propsObject={props}
      usage={
        '<TextField type="text" label="Username" allowClear={true} removeFloatingLabel={true}/>'
      }
    >
      <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>
        Text with clear icon
      </Heading>
      <div style={{ width: '300px' }}>
        <TextField
          type="text"
          label="Username"
          value={textWithClearIconValue}
          allowClear={true}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTextWithClearIconValue(e.target.value)
          }
          removeFloatingLabel={true}
        />
      </div>
    </StorybookComponent>
  );
};

const TextFieldDisabledStory = () => {
  const props = {
    TextField: [
      {
        name: 'disabled',
        type: 'boolean',
        defaultValue: <code>false</code>,
        possibleValue: <code>true | false</code>,
        require: 'no',
        description: 'Disable the Text Field.',
      },
    ],
  };

  return (
    <StorybookComponent
      propsObject={props}
      usage={'<TextField type="text" label="Username" disabled={true} />'}
    >
      <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>
        Disabled
      </Heading>
      <div style={{ width: '300px' }}>
        <TextField type="text" label="Username" disabled={true} />
      </div>
    </StorybookComponent>
  );
};

const TextFieldWithStartIcon = () => {
  const props = {
    TextField: [
      {
        name: 'startIcon',
        type: 'node',
        defaultValue: '-',
        possibleValue: 'any icon',
        require: 'no',
        description: 'Icon at the start of the input element.',
      },
    ],
  };
  const [textFieldWithIconValue, setTextFieldWithIconValue] = React.useState(
    ''
  );

  return (
    <StorybookComponent
      propsObject={props}
      usage={
        '<TextField type="text" label="Username" startIcon={<SearchIcon />} removeFloatingLabel={true} />'
      }
    >
      <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>
        Text with Start Icon
      </Heading>
      <div style={{ width: '300px' }}>
        <TextField
          type="text"
          label="Username"
          value={textFieldWithIconValue}
          startIcon={<SearchIcon />}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTextFieldWithIconValue(e.target.value)
          }
          removeFloatingLabel={true}
        />
      </div>
    </StorybookComponent>
  );
};

const TextFieldWithErrorState = () => (
  <StorybookComponent
    usage={
      '<TextField type="text" label="Username" status="error" removeFloatingLabel={true} />'
    }
  >
    <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>
      Error State
    </Heading>
    <div style={{ width: '300px' }}>
      <TextField
        type="text"
        label="Username"
        status="error"
        removeFloatingLabel={true}
      />
    </div>
  </StorybookComponent>
);

const TextFieldWithFloatingLabel = () => {
  const [textWithFloatingLabel, setTextWithFloatingLabel] = React.useState<
    string
  >('');

  return (
    <StorybookComponent usage={'<TextField type="text" label="Username" />'}>
      <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>
        Floating label
      </Heading>
      <div style={{ width: '300px' }}>
        <TextField
          type="text"
          label="Username"
          value={textWithFloatingLabel}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTextWithFloatingLabel(e.target.value)
          }
        />
      </div>
    </StorybookComponent>
  );
};

const TextFieldStories = () => (
  <React.Fragment>
    <TextFieldStory />
    <Divider theme="grey" />
    <TextFieldWithClearIconStory />
    <Divider theme="grey" />
    <TextFieldDisabledStory />
    <Divider theme="grey" />
    <TextFieldWithStartIcon />
    <Divider theme="grey" />
    <TextFieldWithErrorState />
    <Divider theme="grey" />
    <TextFieldWithFloatingLabel />
  </React.Fragment>
);

export default TextFieldStories;
