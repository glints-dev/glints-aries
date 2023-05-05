import { Meta, Story } from '@storybook/react';
import React from 'react';
import { withGlintsPortalContainer } from '../../helpers/storybook/Decorators';
import { Button, PrimaryButton } from '../Button';
import { Icon } from '../Icon';
import { space12 } from '../utilities/spacing';

import { Badge, BadgeProps } from './Badge';
import { StyledBadge } from './FloatingBadgeSyle';

(Badge as React.FunctionComponent<BadgeProps>).displayName = 'Badge';

export default {
  title: '@next/FloatingBadge',
  component: Badge,
  decorators: [withGlintsPortalContainer],
} as Meta;

const Template: Story<BadgeProps> = args => (
  <div style={{ display: 'flex', gap: '10px' }}>
    <div style={{ position: 'relative', marginRight: space12 }}>
      <Button
        type="button"
        icon={<Icon name="ri-message-line" />}
        iconPosition="left"
      >
        Chat
      </Button>
      <StyledBadge {...args}>10</StyledBadge>
    </div>
    <div style={{ position: 'relative', marginRight: space12 }}>
      <PrimaryButton
        type="button"
        icon={<Icon name="ri-message-line" />}
        iconPosition="left"
      >
        Chat
      </PrimaryButton>
      <StyledBadge {...args}>1</StyledBadge>
    </div>
  </div>
);

export const Interactive = Template.bind({});

Interactive.args = { status: 'attention', hasBorder: true };
Interactive.parameters = {
  docs: {
    source: {
      code: `
<div style={{ display: 'flex', gap: '10px' }}>
  <div style={{ position: 'relative', marginRight: space12 }}>
    <Button
      type="button"
      icon={<Icon name="ri-message-line" />}
      iconPosition="left"
    >
      Chat
    </Button>
    <StyledBadge {...args}>10</StyledBadge>
  </div>
  <div style={{ position: 'relative', marginRight: space12 }}>
    <PrimaryButton
      type="button"
      icon={<Icon name="ri-message-line" />}
      iconPosition="left"
    >
      Chat
    </PrimaryButton>
    <StyledBadge {...args}>1</StyledBadge>
  </div>
</div>
      `,
    },
    language: 'javascript',
    type: 'auto',
  },
};
