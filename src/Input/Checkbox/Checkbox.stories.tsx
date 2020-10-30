import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { Checkbox, CheckboxProps } from './Checkbox';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';

export default {
  title: 'General/Checkbox',
  component: Checkbox,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<CheckboxProps> = args => <Checkbox {...args} />;

export const Interactive = Template.bind({});
Interactive.args = {
  id: 'software-engineer',
  value: 'software-engineer',
  label: 'Software Engineer',
};

export const Bordered = Template.bind({});
Bordered.args = {
  id: 'bordered-engineer',
  value: 'bordered-engineer',
  label: 'Bordered Engineer',
  border: true,
};

export const Sizes = Template.bind({});
Sizes.args = {
  id: 'large-engineer',
  value: 'large-engineer',
  label: 'Large Engineer',
  size: 'large',
};
