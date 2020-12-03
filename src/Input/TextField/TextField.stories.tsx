import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';

import { Props, TextField } from './TextField';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import SearchIcon from '../../General/Icon/components/SearchIcon';

export default {
  title: 'Input/TextField',
  component: TextField,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<Props> = args => {
  const [textValue, setTextValue] = useState<string>('');
  return (
    <TextField
      value={textValue}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setTextValue(e.target.value)
      }
      {...args}
    />
  );
};

export const Interactive = Template.bind({});
Interactive.args = {
  label: 'Description',
  type: 'text',
};

export const TextFieldWithClearIcon = Template.bind({});
TextFieldWithClearIcon.args = {
  label: 'Description',
  allowClear: true,
  type: 'text',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Description',
  type: 'text',
  disabled: true,
};

export const TextFieldWithStartIcon = Template.bind({});
TextFieldWithStartIcon.args = {
  label: 'Description',
  type: 'text',
  startIcon: <SearchIcon />,
};

export const PasswordField = Template.bind({});
PasswordField.args = {
  label: 'Description',
  type: 'password',
};
