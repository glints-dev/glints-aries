import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';

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
