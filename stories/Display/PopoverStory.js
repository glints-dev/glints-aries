import React from 'react';
import { action } from '@storybook/addon-actions';

import Popover from '../../src/Display/Popover';
import PointingModal from '../../src/Display/PointingModal';
import ProfilePicture from '../../src/General/ProfilePicture';
import Divider from '../../src/General/Divider';
import Collapsible from '../../src/Display/Collapsible';

const PopoverStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Popover
      </h1>
      <p>
        <code>
          {'import { Popover } from \'glints-aries\''}
        </code>
      </p>
    </div>

    <div style={{ marginBottom: '2em' }}>
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
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Collapsible label="Usage" isOpen={false}>
        <pre>
          {`<Popover content={( <Component /> )}>
  <ProfilePicture editable>
  <img src="..." alt="..." />
</ProfilePicture>
</Popover>`}
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
          <td>content</td>
          <td>element</td>
          <td></td>
          <td>element</td>
          <td>yes</td>
          <td>Displaying content when button is clicked.</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default PopoverStory;
