import * as React from 'react';

import { action } from '@storybook/addon-actions';

import StorybookComponent from '../StorybookComponent';

import Popover from '../../src/Display/Popover';
import PointingModal from '../../src/Display/PointingModal';
import ProfilePicture from '../../src/General/ProfilePicture';
import Divider from '../../src/General/Divider';

const props = {
  Popover: [
    {
      name: 'content',
      type: 'element',
      defaultValue: '',
      possibleValue: 'element',
      require: 'yes',
      description: 'Display content when button is clicked.',
    },
  ],
};

const PopoverStory = () => (
  <StorybookComponent
    title="Popover"
    code="import { Popover } from 'glints-aries'"
    propsObject={props}
    usage={`<Popover content={( <Component /> )}>
  <ProfilePicture editable>
    <img src="..." alt="..." />
  </ProfilePicture>
</Popover>`}
  >
    <Popover
      content={(
        <PointingModal>
          <PointingModal.Header>
            <ProfilePicture editable onClick={action('Profile Picture is')}>
              <img src="https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&w=750&q=80" alt="profile" />
            </ProfilePicture>
            <div className="aries-modal-profile">
              <span>
                Hello,
              </span>
              <a href="./profile">
                Fredy Yanto
              </a>
            </div>
          </PointingModal.Header>
          <Divider theme="grey" />
          <PointingModal.Body>
            <PointingModal.Item onClick={action('View Profile')}>
              View Profile
            </PointingModal.Item>
            <PointingModal.Item onClick={action('Edit Profile')}>
              Edit Profile
            </PointingModal.Item>
            <PointingModal.Item onClick={action('Sign Out')}>
              Sign Out
            </PointingModal.Item>
          </PointingModal.Body>
        </PointingModal>
      )}
    >
      <ProfilePicture editable>
        <img src="https://images.unsplash.com/photo-1537530360953-3b8b369e01fe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ecc5073c4eb34e6c480e32b48e6208db&auto=format&fit=crop&w=750&q=80" alt="profile" />
      </ProfilePicture>
    </Popover>
  </StorybookComponent>
);

export default PopoverStory;
