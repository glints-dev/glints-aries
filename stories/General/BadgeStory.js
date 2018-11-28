import React from 'react';

import Badge from '../../src/General/Badge';
import Collapsible from '../../src/Display/Collapsible';

const BadgeStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Badge
      </h1>
      <p>
        <code>
          {'import { Badge } from \'glints-aries\''}
        </code>
      </p>
    </div>

    <div style={{ marginBottom: '2em' }}>
      <span style={{ marginRight: '.5em' }}>Jobs</span>
      <Badge label="6" sup />
    </div>

    <div style={{ marginBottom: '2em' }}>
      <span style={{ marginRight: '.5em' }}>Location</span>
      <Badge label="15" />
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Collapsible label="Usage" isOpen={false}>
        <pre>
          {'<Badge label="6" />'}
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
            label
          </td>
          <td>
            string
          </td>
          <td></td>
          <td>
            any
          </td>
          <td>
            yes
          </td>
          <td>
            Sets the label of Badge.
          </td>
        </tr>
        <tr>
          <td>
            sup
          </td>
          <td>
            boolean
          </td>
          <td>
            <code>false</code>
          </td>
          <td>
            <code>true | false</code>
          </td>
          <td>
            no
          </td>
          <td>
            Sets Badge into superscript type.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default BadgeStory;
