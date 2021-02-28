import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Badge, Props } from './Badge';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import styled from 'styled-components';

const BadgeStack = styled('div')`
  display: flex;
  align-items: flex-start;
`;

export default {
  title: 'General/Badge',
  component: Badge,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<Props> = args => <Badge {...args}></Badge>;

export const Interactive = Template.bind({});

Interactive.args = {
  label: 'hello',
};

export const Variants: Story<Props> = () => (
  <BadgeStack>
    <Badge label="4" variant="default" />
    <Badge label="4" variant="dimmed" />
    <Badge label="4" variant="white" />
    <Badge label="4" variant="blue" />
  </BadgeStack>
);
