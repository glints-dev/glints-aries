import { Meta, Story } from '@storybook/react';
import React from 'react';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';

import { Neutral } from '../utilities/colors';
import { Badge, BadgeProps } from './Badge';

(Badge as React.FunctionComponent<BadgeProps>).displayName = 'Badge';

const defaultText = 'Badge';

export default {
  title: '@next/Badge',
  component: Badge,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
  argTypes: {
    textColor: {
      description: 'Text color of the badge',
      control: 'color',
      table: {
        category: 'Colors',
      },
    },
  },
} as Meta;

const Template: Story<BadgeProps> = args => (
  <Badge {...args}>{defaultText}</Badge>
);

export const Interactive = Template.bind({});

Interactive.args = { status: null };

const WithBorderTemplate: Story<BadgeProps> = args => (
  <div
    style={{
      background: Neutral.B00,
      height: '40px',
      width: '75px',
      padding: '8px',
    }}
  >
    <Badge {...args}>{defaultText}</Badge>
  </div>
);

export const WithBorder = WithBorderTemplate.bind({});

WithBorder.args = { status: 'attention', hasBorder: true };
