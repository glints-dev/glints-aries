import { Meta, Story } from '@storybook/react';
import React from 'react';

import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { Badge, BadgeProps } from './Badge';

(Badge as React.FunctionComponent<BadgeProps>).displayName = 'Badge';

const defaultText = 'Badge';

export default {
  title: '@next/Badge',
  component: Badge,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<BadgeProps> = args => (
  <Badge {...args}>{defaultText}</Badge>
);

export const Interactive = Template.bind({});

Interactive.args = { status: null };
