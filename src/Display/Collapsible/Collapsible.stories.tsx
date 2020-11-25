import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Collapsible, Props } from './Collapsible';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';

export default {
  title: 'Display/Collapsible',
  component: Collapsible,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const defaultText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';

const Template: Story<Props> = ({ children, ...args }) => (
  <Collapsible {...args}>{children || defaultText}</Collapsible>
);

export const Interactive = Template.bind({});
Interactive.args = {
  label: 'Lorem Ipsum',
  children: defaultText,
  isOpen: true,
};
