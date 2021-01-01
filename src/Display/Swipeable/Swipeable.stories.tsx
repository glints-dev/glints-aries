import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Swipeable, Props } from './Swipeable';
import { SwipeableCardExample } from './SwipeableStyle';

export default {
  title: 'Display/Swipeable',
  component: Swipeable,
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<Props> = ({ ...args }) => {
  return (
    <>
      <Swipeable {...args}>
        {Array.from(Array(10).keys()).map(number => (
          <Swipeable.Item key={number}>
            <SwipeableCardExample>
              <h1>Card. {number}</h1>
            </SwipeableCardExample>
          </Swipeable.Item>
        ))}
      </Swipeable>
    </>
  );
};

export const Default = Template.bind({});
