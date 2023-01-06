import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ButtonProps } from './Button';
import { DestructiveButton } from './DesctructiveButtonStyle';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';

(DestructiveButton as React.FunctionComponent<ButtonProps>).displayName =
  'DestructiveButton';

const defaultText = 'Label';

export default {
  title: '@next/DestructiveButton',
  component: DestructiveButton,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<ButtonProps> = args => (
  <DestructiveButton {...args}>{defaultText}</DestructiveButton>
);

export const Interactive = Template.bind({});
Interactive.args = { size: 'default' };
