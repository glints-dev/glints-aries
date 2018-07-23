import React from 'react';
import PointingModal from '../src/PointingModal';
import ModalPopOver from '../src/PointingModalPopOver';

import ProfilePicture from '../src/ProfilePicture';
import Label from '../src/Label';
import Divider from '../src/Divider';
import { Icons } from '../src/Icon';

const PointingModalStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
Pointing Modal
      </h1>
      <p>
        <code>
import PointingModal from 'glints-aries'
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
            <div style={{ margin: 'auto' }}>
              <ModalPopOver
                content={(
                  <PointingModal>
                    <PointingModal.Header>
                      <ProfilePicture editable />
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
                )}
              >
                <Icons name="drop-down" />
              </ModalPopOver>
            </div>
          </td>
          <td>
            <pre>
              {`<PointingModal>
  <PointingModal.Header>
    <ProfilePicture editable assetUrl="{ url / path }" />
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
</PointingModal>`}
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
