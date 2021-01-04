import React from 'react';
import { Story, Meta } from '@storybook/react';

import ProfilePicture, { Props } from './ProfilePicture';

export default {
  title: 'General/ProfilePicture',
  component: ProfilePicture,
} as Meta;

const Template: Story<Props> = args => (
  <ProfilePicture {...args}>
    <img
      src="https://images.unsplash.com/photo-1537530360953-3b8b369e01fe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ecc5073c4eb34e6c480e32b48e6208db&auto=format&fit=crop&w=750&q=80"
      alt="Ying Cong"
    />
  </ProfilePicture>
);

export const Interactive = Template.bind({});

export const ShowEditIconOnHover = Template.bind({});
ShowEditIconOnHover.args = {
  editable: true,
};
