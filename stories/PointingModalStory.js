import React from 'react';
import {PointingModal, PointingModalHeader, 
  PointingModalBody, PointingModalItem, 
  PointingModalFooter} from './../src/PointingModal';

import ProfilePicture from '../src/ProfilePicture';
import Label from '../src/Label';
import Divider from '../src/Divider';

const PointingModalStory = () => {
  return (
    <div className="doc-mainbar">
      <h1>Pointing Modal</h1>
      <p><code>{`import { PointingModal } from 'glints-aries'`}</code></p>

      <table className="doc-table">
        <thead>
          <tr>
            <th colSpan="0">
              Preview
            </th>
            <th>Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{padding: 20, backgroundColor: 'lightGrey'}}>
              <PointingModal>
                <PointingModalHeader>
                  <ProfilePicture editable assetUrl="https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&w=750&q=80" />
                  <Label size="medium">
                      <span>Hello,</span>
                      <p>Fredy Yanto</p>
                  </Label>
                </PointingModalHeader>
                <Divider size="large" thickness="thin" theme="grey" />
                <PointingModalBody>
                  <PointingModalItem>View Profile</PointingModalItem>
                  <PointingModalItem>Edit Profile</PointingModalItem>
                  <PointingModalItem>Sign Out</PointingModalItem>
                </PointingModalBody>
              </PointingModal>
            </td>
            <td><pre>{`<PointingModal>
  <PointingModalHeader>
    <ProfilePicture editable assetUrl="{ url / path }" />
    <Label size="medium">
        <span>Hello,</span>
        <p>Fredy Yanto</p>
    </Label>
  </PointingModalHeader>
  <Divider size="large" thickness="thin" theme="grey" />
  <PointingModalBody>
    <PointingModalItem>View Profile</PointingModalItem>
    <PointingModalItem>Edit Profile</PointingModalItem>
    <PointingModalItem>Sign Out</PointingModalItem>
  </PointingModalBody>
  <PointingModalFooter>
    Footer section here ...
  </PointingModalFooter>
</PointingModal>`}</pre></td>
          </tr>
        </tbody>
      </table>

      <h1>Notes</h1>
      <p>- You just need to <code>import</code> the rest of the components from <code>glints-aries</code> and follow the props guideline on each components or just use your own styling.</p>
      <p>- Header and Footer section are using <b>row</b> and Body is using <b>column</b> for the flex-direction.</p>
    </div>
  );
}

export default PointingModalStory;
