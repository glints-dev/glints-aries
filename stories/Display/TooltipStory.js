import React from 'react';

import Tooltip from '../../src/Display/Tooltip';
import Tag from '../../src/General/Tag';
import Collapsible from '../../src/Display/Collapsible';

const TooltipStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Tooltip
      </h1>
      <p>
        <code>
          {'import { Tooltip } from \'glints-aries\''}
        </code>
      </p>
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Tooltip
        text="Click here to apply as Software Engginer at Glints"
      >
        <Tag theme="black">
          Software Engineer
        </Tag>
      </Tooltip>
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Collapsible label="Usage" isOpen={false}>
        <pre>
          {`<Tooltip text="Click here to apply as Software Engginer at Glints">
  <Component />
</Tooltip>`}
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
            text
          </td>
          <td>
            string
          </td>
          <td></td>
          <td>any</td>
          <td>
            yes
          </td>
          <td>Sets text for Tooltip.</td>
        </tr>
        <tr>
          <td>
            position
          </td>
          <td>
            string
          </td>
          <td></td>
          <td><code>bottom</code></td>
          <td>
            no
          </td>
          <td>Sets position of Tooltip to be shown.</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default TooltipStory;
