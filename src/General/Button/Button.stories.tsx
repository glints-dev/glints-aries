import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Flex } from '../../Layout/Flex';
import { Button, Props as ButtonProps } from './Button';
import {
  ArrowBackDoubleIcon,
  ArrowBackIcon,
  ArrowNextDoubleIcon,
  ArrowNextIcon,
  ViewIcon,
} from '../Icon/components';

export default {
  title: 'General/Button',
  component: Button,
  argTypes: {
    startIcon: {
      control: {
        type: 'select',
        options: {
          'Example: ArrowBackIcon': <ArrowBackIcon />,
          'Example: ArrowBackDoubleIcon': <ArrowBackDoubleIcon />,
        },
      },
    },
    endIcon: {
      control: {
        type: 'select',
        options: {
          'Example: ArrowBackIcon': <ArrowNextIcon />,
          'Example: ArrowNextDoubleIcon': <ArrowNextDoubleIcon />,
        },
      },
    },
    tag: {
      control: { type: 'text' },
    },
    className: {
      table: {
        disable: true,
      },
    },
    ref: {
      table: {
        disable: true,
      },
    },
    theme: {
      control: null,
    },
  },
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args}>Button</Button>;

export const SolidBlue = Template.bind({});
SolidBlue.args = {
  variant: 'solid-blue',
};

export const Variants: Story<ButtonProps> = () => (
  <Flex flexWrap="wrap" style={{ gap: '10px' }}>
    <Button variant="solid-blue">solid-blue</Button>
    <Button variant="ghost">ghost</Button>
    <Button variant="white-grey">white-grey</Button>
    <Button variant="yellow">yellow</Button>
    <Button variant="solid-white">solid-white</Button>
    <Button variant="link">link</Button>
  </Flex>
);

export const Sizes: Story<ButtonProps> = () => (
  <Flex alignItems="flex-end" flexWrap="wrap" style={{ gap: '10px' }}>
    <Button variant="solid-blue" small>
      Small
    </Button>
    <Button variant="solid-blue">Default</Button>
    <div style={{ width: '100%' }}>
      <Button variant="solid-blue" block small>
        Small Block
      </Button>
    </div>
    <div style={{ width: '100%' }}>
      <Button variant="solid-blue" block>
        Default Block
      </Button>
    </div>
  </Flex>
);

export const Disable: Story<ButtonProps> = () => (
  <Flex style={{ gap: '10px' }}>
    <Button variant="solid-blue">enabled</Button>
    <Button variant="solid-blue" disabled>
      disabled
    </Button>
  </Flex>
);

export const WithIcon: Story<ButtonProps> = () => (
  <Flex style={{ gap: '10px' }}>
    <Button variant="solid-blue" startIcon={<ViewIcon />}>
      button icon left
    </Button>
    <Button variant="solid-blue" endIcon={<ArrowNextIcon />}>
      button icon right
    </Button>
  </Flex>
);

export const WithDifferentTag: Story<ButtonProps> = () => (
  <Flex style={{ gap: '10px' }}>
    <Button variant="solid-blue" tag="a">
      button as anchor
    </Button>
  </Flex>
);
