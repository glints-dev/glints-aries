import React from 'react';
import ProfilePicture from '../src/General/ProfilePicture';

const ProfilePictureStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Profile Picture
      </h1>
      <p>
        <code>
          {'import { ProfilePicture } from \'glints-aries\''}
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
          <td style={{ padding: 20 }}>
            <ProfilePicture editable>
              <img src="https://images.unsplash.com/photo-1537530360953-3b8b369e01fe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ecc5073c4eb34e6c480e32b48e6208db&auto=format&fit=crop&w=750&q=80" alt="profile" />
            </ProfilePicture>
          </td>
          <td>
            <pre>
              {`<ProfilePicture editable>
  <img src="..." alt="..." />
</ProfilePicture>`}
            </pre>
          </td>
        </tr>
      </tbody>
    </table>

    <h1>
      Props
    </h1>
    <table className="doc-table">
      <thead>
        <tr>
          <th>
            Name
          </th>
          <th>
            Type
          </th>
          <th>
            Value
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
            editable
          </td>
          <td>
            boolean
          </td>
          <td>
            <code>
            true | false
            </code>
          </td>
          <td>
            no
          </td>
          <td>
            {'Showing edit icon when it\'s hovered.'}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default ProfilePictureStory;
