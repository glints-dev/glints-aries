import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, Props as ButtonProps } from './Button';
import {
  ArrowBackDoubleIcon,
  ArrowBackIcon,
  ArrowNextDoubleIcon,
  ArrowNextIcon,
  ViewIcon,
} from '../Icon/components';
import styled from 'styled-components';

const ButtonStack = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export default {
  title: 'General/Button',
  component: Button,
  argTypes: {
    startIcon: {
      control: {
        type: 'select',
        options: {
          ArrowBackIcon: <ArrowBackIcon />,
          ArrowBackDoubleIcon: <ArrowBackDoubleIcon />,
        },
      },
    },
    endIcon: {
      control: {
        type: 'select',
        options: {
          ArrowBackIcon: <ArrowNextIcon />,
          ArrowBackDoubleIcon: <ArrowNextDoubleIcon />,
        },
      },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args}>Button</Button>;

export const SolidBlue = Template.bind({});
SolidBlue.args = {
  variant: 'solid-blue',
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: 'ghost',
};

export const Variants: Story<ButtonProps> = () => (
  <ButtonStack>
    <Button variant="solid-white">Solid-white</Button>
    <Button variant="solid-blue">Solid-blue</Button>
    <Button variant="yellow">Yellow</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="white-grey">White-grey</Button>
    <Button variant="link">Link</Button>
  </ButtonStack>
);

export const Disabled: Story<ButtonProps> = () => (
  <ButtonStack>
    <Button variant="solid-white" disabled>
      Solid-white
    </Button>
    <Button variant="solid-blue" disabled>
      Solid-blue
    </Button>
    <Button variant="yellow" disabled>
      Yellow
    </Button>
    <Button variant="ghost" disabled>
      Ghost
    </Button>
    <Button variant="white-grey" disabled>
      White-grey
    </Button>
    <Button variant="link" disabled>
      Link
    </Button>
  </ButtonStack>
);

export const Small: Story<ButtonProps> = () => (
  <ButtonStack>
    <Button variant="solid-white" small>
      Solid-white
    </Button>
    <Button variant="solid-blue" small>
      Solid-blue
    </Button>
    <Button variant="yellow" small>
      Yellow
    </Button>
    <Button variant="ghost" small>
      Ghost
    </Button>
    <Button variant="white-grey" small>
      White-grey
    </Button>
    <Button variant="link" small>
      Link
    </Button>
  </ButtonStack>
);

export const Block: Story<ButtonProps> = () => (
  <ButtonStack style={{ alignItems: 'unset' }}>
    <Button variant="solid-white" block>
      Solid-white
    </Button>
    <Button variant="solid-blue" block>
      Solid-blue
    </Button>
    <Button variant="yellow" block>
      Yellow
    </Button>
    <Button variant="ghost" block>
      Ghost
    </Button>
    <Button variant="white-grey" block>
      White-grey
    </Button>
    <Button variant="link" block>
      Link
    </Button>
  </ButtonStack>
);

export const WithIcon: Story<ButtonProps> = () => (
  <ButtonStack>
    <Button
      variant="solid-white"
      startIcon={<ViewIcon />}
      endIcon={<ArrowNextIcon />}
    >
      Solid-white
    </Button>
    <Button
      variant="solid-blue"
      startIcon={<ViewIcon />}
      endIcon={<ArrowNextIcon />}
    >
      Solid-blue
    </Button>
    <Button
      variant="yellow"
      startIcon={<ViewIcon />}
      endIcon={<ArrowNextIcon />}
    >
      Yellow
    </Button>
    <Button
      variant="ghost"
      startIcon={<ViewIcon />}
      endIcon={<ArrowNextIcon />}
    >
      Ghost
    </Button>
    <Button
      variant="white-grey"
      startIcon={<ViewIcon />}
      endIcon={<ArrowNextIcon />}
    >
      White-grey
    </Button>
    <Button variant="link" startIcon={<ViewIcon />} endIcon={<ArrowNextIcon />}>
      Link
    </Button>
  </ButtonStack>
);

export const WithDifferentTag: Story<ButtonProps> = () => (
  <ButtonStack>
    <Button variant="solid-white" tag="a">
      Solid-white
    </Button>
    <Button variant="solid-blue" tag="a">
      Solid-blue
    </Button>
    <Button variant="yellow" tag="a">
      Yellow
    </Button>
    <Button variant="ghost" tag="a">
      Ghost
    </Button>
    <Button variant="white-grey" tag="a">
      White-grey
    </Button>
    <Button variant="link" tag="a">
      Link
    </Button>
  </ButtonStack>
);
