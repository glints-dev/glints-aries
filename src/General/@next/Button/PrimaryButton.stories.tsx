import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ButtonProps } from './Button';
import { PrimaryButton } from './PrimaryButtonStyle';
import { BaseContainer } from '../../../Layout/GlintsContainer/GlintsContainer';

(PrimaryButton as React.FunctionComponent<ButtonProps>).displayName =
  'PrimaryButton';

const defaultText = 'Label';

export default {
  title: 'Button/@next/PrimaryButton',
  component: PrimaryButton,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<ButtonProps> = args => (
  <PrimaryButton {...args}>{defaultText}</PrimaryButton>
);

export const Interactive = Template.bind({});
Interactive.args = { size: 'default' };
