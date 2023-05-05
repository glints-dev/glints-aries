import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { Icon } from '../Icon';
import { PrimaryButton } from './PrimaryButtonStyle';

(Button as React.FunctionComponent<ButtonProps>).displayName = 'Button';

const defaultText = 'Label';

export default {
  title: '@next/Button',
  component: Button,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} as Meta;

const Template: Story<ButtonProps> = args => (
  <Button {...args} type="button">
    {defaultText}
  </Button>
);

export const Interactive = Template.bind({});
Interactive.args = { size: 'default', disabled: false };

const WithIconsTemplate: Story<ButtonProps> = args => (
  <div style={{ display: 'flex', gap: '10px' }}>
    <Button {...args} type="button">
      {defaultText}
    </Button>
    <PrimaryButton {...args} type="button">
      {defaultText}
    </PrimaryButton>
  </div>
);

export const WithIcon = WithIconsTemplate.bind({});
WithIcon.args = {
  size: 'default',
  icon: <Icon name="ri-arrow-up-down-fill" />,
  iconPosition: 'left',
  disabled: false,
};
