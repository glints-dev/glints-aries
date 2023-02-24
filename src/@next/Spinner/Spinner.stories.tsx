import { Meta, Story } from '@storybook/react';
import React from 'react';

import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { Blue } from '../utilities/colors';
import { Spinner, SpinnerProps } from './Spinner';

(Spinner as React.FunctionComponent<SpinnerProps>).displayName = 'Spinner';

export default {
  title: '@next/Spinner',
  component: Spinner,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<SpinnerProps> = args => {
  return <Spinner {...args} fill={Blue.S99} />;
};

export const Default = Template.bind({});
Default.args = {
  size: 'large',
};

const WithLabelTemplate: Story<SpinnerProps> = args => {
  return <Spinner {...args} fill={Blue.S99} />;
};

export const WithLabel = WithLabelTemplate.bind({});
WithLabel.args = {
  size: 'large',
  label: 'Loading...',
};
