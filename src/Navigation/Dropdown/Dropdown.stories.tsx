import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Dropdown, Props } from './Dropdown';
import {
  ArrowNextIcon,
  ArrowNextDoubleIcon,
  InfoIcon,
} from '../../General/Icon/components';

export default {
  title: 'Navigation/Dropdown',
  component: Dropdown,
  argTypes: {
    iconDefaultColor: {
      control: 'color',
    },
    leftIcon: {
      control: {
        type: 'select',
        options: {
          'Example: ArrowBackIcon': <ArrowNextIcon />,
          'Example: ArrowNextDoubleIcon': <ArrowNextDoubleIcon />,
        },
      },
    },
  },
} as Meta;

const Template: Story<Props> = args => {
  return (
    <div style={{ height: '150px' }}>
      <Dropdown label="Career" {...args}>
        <Dropdown.Item value="pm">Product Manager</Dropdown.Item>
        <Dropdown.Item value="se">Software Engineer</Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export const Default = Template.bind({});

export const HoverToOpen = Template.bind({});
HoverToOpen.args = {
  hoverToOpen: true,
};

export const DropdownWithIconAndDefaultIconColour = Template.bind({});
DropdownWithIconAndDefaultIconColour.args = {
  leftIcon: <InfoIcon />,
  iconDefaultColor: 'red',
};

export const DropdownWithHoverLineEffect = Template.bind({});
DropdownWithHoverLineEffect.args = {
  showHoverLine: true,
};

export const DropdownWithRightPlacement = Template.bind({});
DropdownWithRightPlacement.args = {
  dropDownPlacement: 'right',
};

export const DropdownWithFullWidth = Template.bind({});
DropdownWithFullWidth.args = {
  showFullWidth: true,
};

export const DisabledDropdown = Template.bind({});
DisabledDropdown.args = {
  disabled: true,
};
