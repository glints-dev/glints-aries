import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Slider, Props } from './Slider';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { SecondaryColor, Greyscale } from '../../Utils/Colors';
import { ArrowBackDoubleIcon } from '../../General/Icon/components';
import ArrowNextDoubleIcon from '../../General/Icon/components/ArrowNextDoubleIcon';

export default {
  title: 'Display/Slider',
  component: Slider,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
    containerRef: {
      table: {
        disable: true,
      },
    },
    afterChange: {
      control: {
        type: null,
      },
    },
    renderLeftIcon: {
      control: {
        type: null,
      },
    },
    renderRightIcon: {
      control: {
        type: null,
      },
    },
  },
} as Meta;

const Template: Story<Props> = ({ ...args }) => (
  <Slider {...args}>
    <Slider.Item>
      <img
        src="https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&h=500&q=80"
        alt="Profile Picture"
      />
    </Slider.Item>
    <Slider.Item>
      <img
        src="https://images.unsplash.com/photo-1599335937498-90b82b84d603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&q=80"
        alt="Nature"
      />
    </Slider.Item>
    <Slider.Item>
      <img
        src="https://images.unsplash.com/photo-1598662779094-110c2bad80b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&q=80"
        alt="Keyboard"
      />
    </Slider.Item>
  </Slider>
);

export const Interactive = Template.bind({});
Interactive.args = {};

export const Autoplay = Template.bind({});
Autoplay.args = { autoplay: true };

export const FullContent = Template.bind({});
FullContent.args = { fullContent: true };

export const ArrowWhite = Template.bind({});
ArrowWhite.args = { arrowWhite: true };

export const RemoveDots = Template.bind({});
RemoveDots.args = { removeDots: true };

export const RemoveArrows = Template.bind({});
RemoveArrows.args = { removeArrows: true };

export const InitialItem = Template.bind({});
InitialItem.args = { initialItem: 2 };

export const CustomizedRenderLeftIcon: Story<Props> = () => (
  <Slider
    renderLeftIcon={(disabled: boolean) => {
      const color = disabled ? Greyscale.grey : SecondaryColor.actionblue;
      return <ArrowBackDoubleIcon color={color} />;
    }}
  >
    <Slider.Item>
      <img
        src="https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&h=500&q=80"
        alt="Profile Picture"
      />
    </Slider.Item>
    <Slider.Item>
      <img
        src="https://images.unsplash.com/photo-1599335937498-90b82b84d603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&q=80"
        alt="Nature"
      />
    </Slider.Item>
    <Slider.Item>
      <img
        src="https://images.unsplash.com/photo-1598662779094-110c2bad80b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&q=80"
        alt="Keyboard"
      />
    </Slider.Item>
  </Slider>
);

export const CustomizedRenderRightIcon: Story<Props> = () => (
  <Slider
    renderRightIcon={(disabled: boolean) => {
      const color = disabled ? Greyscale.grey : SecondaryColor.actionblue;
      return <ArrowNextDoubleIcon color={color} />;
    }}
  >
    <Slider.Item>
      <img
        src="https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&h=500&q=80"
        alt="Profile Picture"
      />
    </Slider.Item>
    <Slider.Item>
      <img
        src="https://images.unsplash.com/photo-1599335937498-90b82b84d603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&q=80"
        alt="Nature"
      />
    </Slider.Item>
    <Slider.Item>
      <img
        src="https://images.unsplash.com/photo-1598662779094-110c2bad80b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&q=80"
        alt="Keyboard"
      />
    </Slider.Item>
  </Slider>
);
