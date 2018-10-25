import React from 'react';

import Divider from '../../src/General/Divider';
import Collapsible from '../../src/Display/Collapsible';

const DividerStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Divider
      </h1>
      <p>
        <code>
          {'import { Divider } from \'glints-aries\''}
        </code>
      </p>
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Divider />
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Collapsible label="Usage" isOpen={false}>
        <pre>
          {'<Divider />'}
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
            <code>
              black
            </code>
          </td>
          <td>
            <code>
              red | blue | yellow | white | grey
            </code>
          </td>
          <td>
            no
          </td>
          <td>
            {'Sets Divider\'s color.'}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default DividerStory;
