import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ToggleSwitch, ToggleSwitchProps } from './ToggleSwitch';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import EyeIcon from '../../General/Icon/components/EyeIcon';
import EyeSlashedIcon from '../../General/Icon/components/EyeSlashedIcon';

export default {
  title: 'Input/ToggleSwitch',
  component: ToggleSwitch,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<ToggleSwitchProps> = args => <ToggleSwitch {...args} />;

export const Interactive = Template.bind({});
Interactive.args = {
  defaultActive: false,
};

export const ToggleSwitchWithIcons: Story<ToggleSwitchProps> = () => (
  <ToggleSwitch
    defaultActive={false}
    iconOptions={{
      active: EyeIcon,
      inactive: EyeSlashedIcon,
    }}
  />
);

export const ToggleSwitchInAnActiveState: Story<ToggleSwitchProps> = () => (
  <ToggleSwitch active={true} />
);
