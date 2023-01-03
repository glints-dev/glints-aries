import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ButtonProps } from './Button';
import { OutlineButton } from './OutlineButtonStyle';
import { BaseContainer } from '../../../Layout/GlintsContainer/GlintsContainer';

(OutlineButton as React.FunctionComponent<ButtonProps>).displayName =
  'OutlineButton';

const defaultText = 'Label';

export default {
  title: 'Button/@next/OutlineButton',
  component: OutlineButton,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<ButtonProps> = args => (
  <OutlineButton {...args}>{defaultText}</OutlineButton>
);

export const Interactive = Template.bind({});
Interactive.args = { size: 'default' };
