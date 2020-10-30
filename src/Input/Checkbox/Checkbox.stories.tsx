import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Checkbox, CheckboxProps } from './Checkbox';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';

export default {
  title: 'General/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = args => (
  <BaseContainer>
    <Checkbox {...args} />
  </BaseContainer>
);

export const Interactive = Template.bind({});
Interactive.args = {
  id: 'software-engineer',
  value: 'software-engineer',
  label: 'Software Engineer',
};
