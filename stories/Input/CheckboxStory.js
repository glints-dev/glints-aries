import React from 'react';

import Checkbox from '../../src/Input/Checkbox';
import Collapsible from '../../src/Display/Collapsible';

const CheckboxStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Checkbox
      </h1>
      <p>
        <code>
          {'import { Checkbox } from \'glints-aries\''}
        </code>
      </p>
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Checkbox id="software-engineer" value="Software Engineer" />
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Collapsible label="Usage" isOpen={false}>
        <pre>
          {'<Checkbox id="software-engineer" value="Software Engineer" />'}
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
            id
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
            {'It\'s a must to always put ID into checkbox to be clicked.'}
          </td>
        </tr>
        <tr>
          <td>
            value
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
            Sets the label of checkbox.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default CheckboxStory;
