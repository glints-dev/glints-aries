import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { Loading, Props as LoadingProps } from './Loading';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';

export default {
  title: 'General/Loading',
  component: Loading,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<LoadingProps> = args => <Loading {...args} />;

export const Interactive = Template.bind({});
Interactive.args = {};
