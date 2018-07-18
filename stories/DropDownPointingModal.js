import React from 'react';
import DropDownPointingModal from '../src/DropDownPointingModal';

const ProfilePictureStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Profile Picture
      </h1>
      <p>
        <code>
          {'import { DropDownPointingModal } from \'glints-aries\''}
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
            <div style={{ position: 'absolute', left: '400px' }}>
              <DropDownPointingModal>
                <button type="button">
                    something
                </button>
              </DropDownPointingModal>
            </div>

          </td>
          <td>
            <code>
              {'<DropDownPointingModal><button>button</button></DropDownPointingModal>'}
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
