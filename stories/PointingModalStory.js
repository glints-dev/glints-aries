import React from 'react';
import PointingModal from '../src/PointingModal';

import ProfilePicture from '../src/ProfilePicture';
import Label from '../src/Label';
import Divider from '../src/Divider';

const PointingModalStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Pointing Modal
      </h1>
      <p>
        <code>
          {'import { PointingModal, PointingModalHeader, PointingModalBody, PointingModalItem, PointingModalFooter } from \'glints-aries\''}
        </code>
      </p>
    </div>

    <table className="doc-table">
      <thead>
        <tr>
          <th colSpan="0">
            Preview
          </th>
          <th>
            Usage
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: 20, backgroundColor: 'lightGrey' }}>
            <PointingModal>
              <PointingModal.Header>
                <ProfilePicture editable assetUrl="https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&w=750&q=80" />
                <Label size="medium">
                  <span>
                    Hello,
                  </span>
                  <p>
                    Fredy Yanto
                  </p>
                </Label>
              </PointingModal.Header>
              <Divider size="large" thickness="thin" theme="grey" />
              <PointingModal.Body>
                <PointingModal.Item>
                  View Profile
                </PointingModal.Item>
                <PointingModal.Item>
                  Edit Profile
                </PointingModal.Item>
                <PointingModal.Item>
                  Sign Out
                </PointingModal.Item>
              </PointingModal.Body>
            </PointingModal>
          </td>
          <td>
            <pre>
              {`<PointingModal>
  <PointingModal.Header>
    <ProfilePicture editable />
    <Label size="medium">
        <span>Hello,</span>
        <p>Fredy Yanto</p>
    </Label>
  </PointingModal.Header>
  <Divider size="large" thickness="thin" theme="grey" />
  <PointingModal.Body>
    <PointingModal.Item>View Profile</PointingModal.Item>
    <PointingModal.Item>Edit Profile</PointingModal.Item>
    <PointingModal.Item>Sign Out</PointingModal.Item>
  </PointingModal.Body>
  <PointingModal.Footer>
    Footer section here ...
  </PointingModal.Footer>
</PointingModal>`
              }
            </pre>
          </td>
        </tr>
      </tbody>
    </table>

    <h1>
      Notes
    </h1>
    <p>
      - You just need to
      {' '}
      <code>
        import
      </code>
      {' '}
        the rest of the components from
      {' '}
      <code>
        glints-aries
      </code>
      {' '}
        and follow the props guideline on each components or just use your own styling.
    </p>
    <p>
      - Header and Footer section are using
      {' '}
      <b>
        row
      </b>
      {' '}
        and Body is using
      {' '}
      <b>
        column
      </b>
      {' '}
        for the flex-direction.
    </p>
  </div>
);

export default PointingModalStory;
