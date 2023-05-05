import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { Icon } from '../Icon';
import { PrimaryButton } from './PrimaryButtonStyle';
import { StyledBadge } from './ButtonStoriesSyle';
import { space12 } from '../utilities/spacing';

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

const WithBadgeTemplate: Story<ButtonProps> = args => (
  <div style={{ display: 'flex', gap: '10px' }}>
    <div style={{ position: 'relative', marginRight: space12 }}>
      <Button {...args} type="button">
        Chat
      </Button>
      <StyledBadge hasBorder status="attention">
        10
      </StyledBadge>
    </div>
    <div style={{ position: 'relative', marginRight: space12 }}>
      <PrimaryButton {...args} type="button">
        Chat
      </PrimaryButton>
      <StyledBadge hasBorder status="attention">
        1
      </StyledBadge>
    </div>
  </div>
);

export const WithBadge = WithBadgeTemplate.bind({});
WithBadge.args = {
  size: 'default',
  icon: <Icon name="ri-message-line" />,
  iconPosition: 'left',
  disabled: false,
};
