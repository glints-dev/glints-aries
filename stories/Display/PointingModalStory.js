import React from 'react';

import { action } from '@storybook/addon-actions';

import PointingModal from '../../src/Display/PointingModal';
import ProfilePicture from '../../src/General/ProfilePicture';
import Divider from '../../src/General/Divider';
import Collapsible from '../../src/Display/Collapsible';

const PointingModalStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Pointing Modal
      </h1>
      <p>
        <code>
          {'import { PointingModal } from \'glints-aries\''}
        </code>
      </p>
    </div>

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

    <div style={{ marginBottom: '2em' }}>
      <Collapsible label="Usage" isOpen={false}>
        <pre>
          {` import { PointingModal, ProfilePicture } from 'glints-aries';

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
        </pre>
      </Collapsible>
    </div>

    <table className="doc-table">
      <thead>
        <tr style={{ borderBottom: '1px solid lightgrey' }}>
          <th colSpan="6">
            <h3 style={{ margin: '.8em 0' }}>
              Props
            </h3>
          </th>
        </tr>
        <tr>
          <th>
            Name
          </th>
          <th>
            Type
          </th>
          <th>
            Default Value
          </th>
          <th>
            Possible Value
          </th>
          <th>
            Required
          </th>
          <th>
            Description
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            onClick
          </td>
          <td>
            function
          </td>
          <td></td>
          <td>
            function
          </td>
          <td>
            no
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default PointingModalStory;
