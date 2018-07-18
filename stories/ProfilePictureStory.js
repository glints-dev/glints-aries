import React from 'react';
import ProfilePicture from '../src/ProfilePicture';

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
            <ProfilePicture
              editable
              size="medium"
            />
          </td>
          <td>
            <code>
              {'<ProfilePicture size="medium" editable />'}
            </code>
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
            size
          </td>
          <td>
            string
          </td>
          <td>
            <pre>
              {'large | medium | small'}
            </pre>
          </td>
          <td>
            no
          </td>
          <td>
            Sets the size of picture.
          </td>
        </tr>
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
            Showing edit icon when it's hovered.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default ProfilePictureStory;
