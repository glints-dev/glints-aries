import React from 'react';
import { Story, Meta } from '@storybook/react';
import Select, { Props as SelectProps } from './Select';
import { WarningOutlineIcon } from '../../General/Icon/components';

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
} as Meta;

const Template: Story<SelectProps> = args => (
  <div style={{ height: '200px' }}>
    <Select {...args}>
      <Select.Option value="accountant">Accountant</Select.Option>
      <Select.Option value="business development">
        Business Development
      </Select.Option>
      <Select.Option value="software engineer">Software Engineer</Select.Option>
    </Select>
  </div>
);

export const DefaultSelect = Template.bind({});
DefaultSelect.args = {
  label: 'Jobs',
};

export const BasicUsage: Story<SelectProps> = () => (
  <div style={{ height: '200px' }}>
    <Select label="Label" value="Accountant">
      <Select.Option value="accountant">Accountant</Select.Option>
      <Select.Option value="business development">
        Business Development
      </Select.Option>
      <Select.Option value="software engineer">Software Engineer</Select.Option>
    </Select>
  </div>
);

export const LoadingOptions: Story<SelectProps> = () => (
  <div style={{ height: '200px' }}>
    <Select label="Jobs" isLoading={true}>
      <Select.Option value="accountant">Accountant</Select.Option>
      <Select.Option value="business development">
        Business Development
      </Select.Option>
      <Select.Option value="software engineer">Software Engineer</Select.Option>
    </Select>
  </div>
);

export const Error: Story<SelectProps> = () => (
  <div style={{ height: '250px' }}>
    <div style={{ marginBottom: '20px' }}>
      <Select label="Boolean" error={true}>
        <Select.Option value="accountant">Accountant</Select.Option>
        <Select.Option value="business development">
          Business Development
        </Select.Option>
        <Select.Option value="software engineer">
          Software Engineer
        </Select.Option>
      </Select>
    </div>
    <div style={{ marginBottom: '20px' }}>
      <Select label="String" error="error message">
        <Select.Option value="accountant">Accountant</Select.Option>
        <Select.Option value="business development">
          Business Development
        </Select.Option>
        <Select.Option value="software engineer">
          Software Engineer
        </Select.Option>
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
      <Select.Option value="accountant">Accountant</Select.Option>
      <Select.Option value="business development">
        Business Development
      </Select.Option>
      <Select.Option value="software engineer">Software Engineer</Select.Option>
    </Select>
  </div>
);

export const Disabled: Story<SelectProps> = () => (
  <Select label="Jobs" disabled={true}>
    <Select.Option value="accountant">Accountant</Select.Option>
    <Select.Option value="business development">
      Business Development
    </Select.Option>
    <Select.Option value="software engineer">Software Engineer</Select.Option>
  </Select>
);

export const DefaultValue: Story<SelectProps> = () => (
  <div style={{ height: '200px' }}>
    <Select label="Jobs" defaultValue="Accountant">
      <Select.Option value="accountant">Accountant</Select.Option>
      <Select.Option value="business development">
        Business Development
      </Select.Option>
      <Select.Option value="software engineer">Software Engineer</Select.Option>
    </Select>
  </div>
);

export const DisableTyping: Story<SelectProps> = () => (
  <div style={{ height: '200px' }}>
    <Select label="Jobs" disableTyping={true}>
      <Select.Option value="accountant">Accountant</Select.Option>
      <Select.Option value="business development">
        Business Development
      </Select.Option>
      <Select.Option value="software engineer">Software Engineer</Select.Option>
    </Select>
  </div>
);

export const CustomizeNoOptionResultMessage: Story<SelectProps> = () => (
  <div style={{ height: '200px' }}>
    <Select label="Jobs" noOptionResult="Customized no option result message">
      <Select.Option value="accountant">Accountant</Select.Option>
      <Select.Option value="business development">
        Business Development
      </Select.Option>
      <Select.Option value="software engineer">Software Engineer</Select.Option>
    </Select>
  </div>
);

export const RemoveFloatingLabel: Story<SelectProps> = () => (
  <div style={{ height: '200px' }}>
    <Select label="Jobs" removeFloatingLabel={true}>
      <Select.Option value="accountant">Accountant</Select.Option>
      <Select.Option value="business development">
        Business Development
      </Select.Option>
      <Select.Option value="software engineer">Software Engineer</Select.Option>
    </Select>
  </div>
);

export const RemoveDropIcon: Story<SelectProps> = () => (
  <div style={{ height: '200px' }}>
    <Select label="Jobs" removeDropIcon={true}>
      <Select.Option value="accountant">Accountant</Select.Option>
      <Select.Option value="business development">
        Business Development
      </Select.Option>
      <Select.Option value="software engineer">Software Engineer</Select.Option>
    </Select>
  </div>
);

export const Sizes: Story<SelectProps> = () => (
  <div style={{ height: '200px' }}>
    <div style={{ marginBottom: '20px' }}>
      <Select label="Small" small={true}>
        <Select.Option value="accountant">Accountant</Select.Option>
        <Select.Option value="business development">
          Business Development
        </Select.Option>
        <Select.Option value="software engineer">
          Software Engineer
        </Select.Option>
      </Select>
    </div>

    <Select label="Default">
      <Select.Option value="accountant">Accountant</Select.Option>
      <Select.Option value="business development">
        Business Development
      </Select.Option>
      <Select.Option value="software engineer">Software Engineer</Select.Option>
    </Select>
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
      <Select.Option value="accountant">Accountant</Select.Option>
      <Select.Option value="business development">
        Business Development
      </Select.Option>
      <Select.Option value="software engineer">Software Engineer</Select.Option>
    </Select>
  </div>
);
