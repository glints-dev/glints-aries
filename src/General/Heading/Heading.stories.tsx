import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Heading, Props } from './Heading';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';

export default {
  title: 'General/Heading',
  component: Heading,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<Props> = ({ children, ...args }) => (
  <Heading {...args}>{children || 'Glints Aries'}</Heading>
);

export const Interactive = Template.bind({});
Interactive.args = {
  children: 'Glints Aries',
};
