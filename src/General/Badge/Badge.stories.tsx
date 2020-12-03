import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Badge, Props } from './Badge';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';

export default {
  title: 'General/Badge',
  component: Badge,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: ['dimmed', 'default'],
      },
    },
  },
} as Meta;

const Template: Story<Props> = args => <Badge {...args}></Badge>;

export const SolidBlue = Template.bind({});

SolidBlue.args = {
  label: 'hello',
};
