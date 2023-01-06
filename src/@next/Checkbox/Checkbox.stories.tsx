import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Checkbox, CheckboxProps } from './Checkbox';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';

(Checkbox as React.FunctionComponent<CheckboxProps>).displayName = 'Checkbox';

export default {
  title: '@next/Checkbox',
  component: Checkbox,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<CheckboxProps> = args => <Checkbox {...args} />;

export const Interactive = Template.bind({});
Interactive.args = { label: 'Label' };
