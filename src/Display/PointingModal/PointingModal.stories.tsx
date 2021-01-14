import React from 'react';
import { Story, Meta } from '@storybook/react';

import PointingModal, { Props } from './PointingModal';
import ProfilePicture from '../../General/ProfilePicture';
import Divider from '../../General/Divider';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';

export default {
  title: 'Display/PointingModal',
  component: PointingModal,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<Props> = ({ ...args }) => (
  <PointingModal {...args}>
    <PointingModal.Header>
      <ProfilePicture editable>
        <img
          src="https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&w=750&q=80"
          alt="profile"
        />
      </ProfilePicture>
      <div className="aries-modal-profile">
        <span>Hello,</span>
        <a href=".">Fredy Yanto</a>
      </div>
    </PointingModal.Header>
    <Divider theme="grey" />
    <PointingModal.Body>
      <PointingModal.Item>View Profile</PointingModal.Item>
      <PointingModal.Item>Edit Profile</PointingModal.Item>
      <PointingModal.Item>Sign Out</PointingModal.Item>
    </PointingModal.Body>
    <PointingModal.Footer>Have a nice day</PointingModal.Footer>
  </PointingModal>
);

export const Interactive = Template.bind({});
Interactive.args = {};
