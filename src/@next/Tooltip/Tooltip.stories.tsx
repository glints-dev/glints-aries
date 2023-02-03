import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Tooltip, TooltipProps } from './Tooltip';
import { Icon } from '../Icon';
import { withGlintsPortalContainer } from '../../helpers/storybook/Decorators';

export default {
  title: '@next/Tooltip',
  component: Tooltip,
  decorators: [withGlintsPortalContainer],
  argTypes: {},
} as Meta;

const Template: Story<TooltipProps> = args => (
  <div style={{ padding: '100px 200px' }}>
    <Tooltip {...args}>
      <Icon
        data-testid="tooltip-activator"
        name="ri-information-line"
        height="24px"
        width="24px"
      />
    </Tooltip>
  </div>
);

export const Interactive = Template.bind({});
Interactive.args = {
  content: 'Tooltip',
  preferredPosition: 'top-center',
};
