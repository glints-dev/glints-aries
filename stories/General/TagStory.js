import React from 'react';

import Tag from '../../src/General/Tag';
import Icon from '../../src/General/Icon';
import Collapsible from '../../src/Display/Collapsible';

const TagStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Tag
      </h1>
      <p>
        <code>
          {'import { Tag } from \'glints-aries\''}
        </code>
      </p>
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Tag label="Software Engineer">
        <Icon name="close" color="black" />
      </Tag>
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Collapsible label="Usage" isOpen={false}>
        <pre>
          {`<Tag label="Software Engineer">
  <Icon name="close" color="black" />
</Tag>`}
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
      </tbody>
    </table>
  </div>
);

export default TagStory;
