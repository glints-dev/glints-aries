import React from 'react';

import EmployersBlockquote from '../../src/Display/EmployersBlockquote';
import Collapsible from '../../src/Display/Collapsible';

const EmployersBlockquoteStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Employers Blockquote
      </h1>
      <p>
        <code>
          {'import { EmployersBlockquote } from \'glints-aries\''}
        </code>
      </p>
    </div>

    <div style={{ marginBottom: '2em' }}>
      <EmployersBlockquote
        profileURL="https://images.unsplash.com/photo-1537530360953-3b8b369e01fe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ecc5073c4eb34e6c480e32b48e6208db&auto=format&fit=crop&w=750&q=80"
        alt="Jia Ann"
        profileName="Jia Ann"
        additionalInfo="Nanyang Technological University"
      >
        The whole hiring process took less than 1 week. We had quite a lot of resumes coming in over a 24 hour period. We found our candidate 1 day later and the whole hiring process was completed quickly.
      </EmployersBlockquote>
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Collapsible label="Usage" isOpen={false}>
        <pre>
          {`<EmployersBlockquote
  profileURL="..."
  alt="Jia Ann"
  profileName="Jia Ann"
  additionalInfo="Nanyang Technological University"
>
  The whole hiring process took less than 1 week.
</EmployersBlockquote>`}
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
            profileURL
          </td>
          <td>
            string
          </td>
          <td></td>
          <td>
            <code>
              url | path
            </code>
          </td>
          <td>
            yes
          </td>
          <td>
            Sets profile picture photo.
          </td>
        </tr>
        <tr>
          <td>
            alt
          </td>
          <td>
            string
          </td>
          <td></td>
          <td>any</td>
          <td>
            yes
          </td>
          <td>
            Sets alt info for profile picture.
          </td>
        </tr>
        <tr>
          <td>
            profileName
          </td>
          <td>
            string
          </td>
          <td></td>
          <td>any</td>
          <td>
            yes
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            additionalInfo
          </td>
          <td>
            string
          </td>
          <td></td>
          <td>any</td>
          <td>
            yes
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default EmployersBlockquoteStory;
