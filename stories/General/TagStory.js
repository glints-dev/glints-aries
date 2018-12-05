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
      <div style={{ display: 'flex' }}>
        <div style={{ textAlign: 'center', marginRight: '2em' }}>
          <h3>Block</h3>
          <Tag theme="orange" block>
            <span style={{ marginRight: '12px' }}>Software Engineer</span>
            <Icon name="close" color="white" />
          </Tag>
        </div>
        <div style={{ textAlign: 'center', marginRight: '2em' }}>
          <h3>Default</h3>
          <Tag theme="blue">
            <span style={{ marginRight: '12px' }}>Software Engineer</span>
            <Icon name="close" color="white" />
          </Tag>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h3>Outline</h3>
          <Tag theme="green" outline>
            <span style={{ marginRight: '12px' }}>Software Engineer</span>
            <Icon name="close" color="#93bd49" />
          </Tag>
        </div>
      </div>
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Collapsible label="Usage" isOpen={false}>
        <pre>
          {`<Tag theme="blue">
  Software Engineer
  <Icon name="close" color="white" />
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
            theme
          </td>
          <td>
            string
          </td>
          <td>
            <code>grey</code>
          </td>
          <td>
            <code>red | blue | orange | green | black</code>
          </td>
          <td>
            no
          </td>
          <td>
            Sets theme of Badge.
          </td>
        </tr>
        <tr>
          <td>
            block
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
            Sets Badge into block style.
          </td>
        </tr>
        <tr>
          <td>
            outline
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
            Sets Badge into outline style.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default TagStory;
