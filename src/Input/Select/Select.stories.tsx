import React from 'react';
import { Story, Meta } from '@storybook/react';
import Select, { Props as SelectProps } from './Select';
import { WarningOutlineIcon } from '../../General/Icon/components';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';

export default {
  title: 'Input/Select',
  component: Select,
  argTypes: {
    status: {
      control: null,
    },
    error: {
      control: { type: 'boolean' },
    },
  },
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Options = [
  <Select.Option key={1} value="accountant">
    Accountant
  </Select.Option>,
  <Select.Option key={2} value="business development">
    Business Development
  </Select.Option>,
  <Select.Option key={3} value="software engineer">
    Software Engineer
  </Select.Option>,
];

const Template: Story<SelectProps> = args => (
  <div style={{ height: '200px' }}>
    <Select
      label="Jobs"
      {...args}
      // set undefined to prevent these properties are shown in code sample
      onBlur={undefined}
      onFocus={undefined}
      onChange={undefined}
      onInputChange={undefined}
    >
      {Options}
    </Select>
  </div>
);

export const DefaultSelect = Template.bind({});

export const BasicUsage = Template.bind({});
BasicUsage.args = {
  label: 'Label',
  value: 'Accountant',
};

export const LoadingOptions = Template.bind({});
LoadingOptions.args = {
  isLoading: true,
};

export const Error: Story<SelectProps> = () => (
  <div style={{ height: '250px' }}>
    <div style={{ marginBottom: '20px' }}>
      <Select label="Boolean" error={true}>
        {Options}
      </Select>
    </div>
    <div style={{ marginBottom: '20px' }}>
      <Select label="String" error="error message">
        {Options}
      </Select>
    </div>
    <Select
      label="React Node"
      error={
        <div>
          <WarningOutlineIcon /> error message
        </div>
      }
    >
      {Options}
    </Select>
  </div>
);

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const DefaultValue = Template.bind({});
DefaultValue.args = {
  defaultValue: 'Accountant',
};

export const DisableTyping = Template.bind({});
DisableTyping.args = {
  disableTyping: true,
};

export const CustomizeNoOptionResultMessage = Template.bind({});
CustomizeNoOptionResultMessage.args = {
  noOptionResult: 'Customized no option result message',
};

export const RemoveFloatingLabel = Template.bind({});
RemoveFloatingLabel.args = {
  removeFloatingLabel: true,
};

export const RemoveDropIcon = Template.bind({});
RemoveDropIcon.args = {
  removeDropIcon: true,
};

export const Sizes: Story<SelectProps> = () => (
  <div style={{ height: '200px' }}>
    <div style={{ marginBottom: '20px' }}>
      <Select label="Small" small={true}>
        {Options}
      </Select>
    </div>

    <Select label="Default">{Options}</Select>
  </div>
);

export const CustomizeFilterFunction: Story<SelectProps> = () => (
  <div style={{ height: '200px' }}>
    <Select
      label="Jobs"
      filterFunction={(option, search) => {
        return !option.toLowerCase().includes(search.toLowerCase());
      }}
    >
      {Options}
    </Select>
  </div>
);
