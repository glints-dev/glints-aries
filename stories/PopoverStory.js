import React from 'react';
import PointingModal from '../src/PointingModal';
import Popover from '../src/Popover';

import ProfilePictureShadow from '../src/ProfilePictureShadow';
import Divider from '../src/General/Divider';
import { Icon } from '../src/General/Icon';

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
          <td style={{ padding: 20, backgroundColor: 'lightGrey', width: '400px' }}>
            <Popover
              content={(
                <PointingModal>
                  <PointingModal.Header>
                    <ProfilePictureShadow editable />
                    <label>
                      <span>
                        Hello,
                      </span>
                      <p>
                        Fredy Yanto
                      </p>
                    </label>
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
              <Icon name="arrow-down" size="20" />
            </Popover>
          </td>
          <td>
            <pre>
              {`<Popover content={( <Component /> )}>
  <Icon name="arrow-down" size="50" />
</Popover>`}
            </pre>
          </td>
        </tr>
      </tbody>
    </table>

    <h1>
      Notes
    </h1>
    <p>
      You can change any component for triggering the Popover. In the case above, we use
      {' '}
      {'<Icon />'}
      {' '}
        to trigger Popover Component.
    </p>
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
            content
          </td>
          <td>
            element
          </td>
          <td>
            Value
          </td>
          <td>
            Yes
          </td>
          <td>
            Content to display when button is clicked
          </td>
        </tr>
        <tr>
          <td>
            margin
          </td>
          <td>
            string
          </td>
          <td>
            Margin css
          </td>
          <td>
            No
          </td>
          <td>
            Margin for the button position
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default PopoverStory;
