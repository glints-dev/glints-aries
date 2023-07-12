import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { Divider, Props } from './Divider';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';

export default {
  title: 'General/Divider',
  component: Divider,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<Props> = args => <Divider {...args} />;

export const Interactive = Template.bind({});

export const DividerWithGreyTheme = Template.bind({});
DividerWithGreyTheme.args = {
  theme: 'grey',
};
