import React from 'react';

import Icon from '../../src/General/Icon';
import Collapsible from '../../src/Display/Collapsible';

import { ICONS } from '../../src/Utils/IconLibrary';

const IconStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Icon
      </h1>
      <p>
        <code>
          {'import { Icon } from \'glints-aries\''}
        </code>
      </p>
    </div>

    <div style={{ display: 'flex', flexWrap: 'wrap', fontSize: '20px' }}>
      {Object.keys(ICONS).sort().map(data => (
        <div style={{ flex: '1 1 20%', margin: '1em' }} key={data}>
          <Icon name={data.toLowerCase().replace(/-/g, '_')} color="black" />
          <p style={{ marginTop: '1em', fontSize: '12px' }}>
            <code style={{ fontSize: '14px' }}>{data.toLowerCase().replace(/_/g, '-')}</code>
          </p>
        </div>
      ))}
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Collapsible label="Usage" isOpen={false}>
        <pre>
          {'<Icon name="add" color="black" />'}
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
            name
          </td>
          <td>
            string
          </td>
          <td></td>
          <td>
            based on the list above
          </td>
          <td>
            yes
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            color
          </td>
          <td>
            string
          </td>
          <td>
            <code>
              black
            </code>
          </td>
          <td>
            <code>
              hex-value | rba-value | string-value
            </code>
          </td>
          <td>
            no
          </td>
          <td>
            Sets color for icon.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default IconStory;
