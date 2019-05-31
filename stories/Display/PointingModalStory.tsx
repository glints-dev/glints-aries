import * as React from 'react';

import { action } from '@storybook/addon-actions';

import StorybookComponent from '../StorybookComponent';

import PointingModal from '../../src/Display/PointingModal';
import ProfilePicture from '../../src/General/ProfilePicture';
import Divider from '../../src/General/Divider';

const props = {
  'Pointing Modal': [
    {
      name: 'onClick',
      type: 'function',
      defaultValue: '',
      possibleValue: 'function',
      require: 'no',
      description: '',
    },
  ],
};

const PointingModalStory = () => (
  <StorybookComponent
    title="Pointing Modal"
    code="import { PointingModal } from 'glints-aries'"
    propsObject={props}
    usage={`import { PointingModal, ProfilePicture } from 'glints-aries';

<PointingModal>
  <PointingModal.Header>
    <ProfilePicture editable assetUrl="{ url / path }" />
    <div className="aries-modal-profile">
        <span>Hello,</span>
        <a href="#">Fredy Yanto</a>
    </div>
  </PointingModal.Header>
  <Divider theme="grey" />
  <PointingModal.Body>
    <PointingModal.Item onClick={...}>
      View Profile
    </PointingModal.Item>
  </PointingModal.Body>
  <PointingModal.Footer>
    Footer section here ...
  </PointingModal.Footer>
</PointingModal>`}
  >
    <div style={{ marginBottom: '2em', width: '250px' }}>
      <PointingModal>
        <PointingModal.Header>
          <ProfilePicture editable>
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
    </div>
  </StorybookComponent>
);

export default PointingModalStory;
