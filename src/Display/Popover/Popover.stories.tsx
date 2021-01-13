import React from 'react';
import { Story, Meta } from '@storybook/react';

import Popover, { Props } from './Popover';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import ProfilePicture from '../../General/ProfilePicture';
import PointingModal from '../PointingModal';

export default {
  title: 'Display/Popover',
  component: Popover,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
    content: {
      control: {
        type: null,
      },
    },
  },
} as Meta;

const Template: Story<Props> = ({ ...args }) => (
  <Popover {...args}>
    <ProfilePicture>
      <img
        src="https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&h=500&q=80"
        alt="Profile Picture"
      />
    </ProfilePicture>
  </Popover>
);

export const Interactive = Template.bind({});
Interactive.args = {
  content: (
    <PointingModal>
      <span>Hello World</span>
    </PointingModal>
  ),
};
