import React from 'react';
import Collapsible from '../../src/Display/Collapsible';

const CollapsibleStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Collapsible
      </h1>
      <p>
        <code>
          {'import { Collapsible } from \'glints-aries\''}
        </code>
      </p>
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Collapsible label="Personal Detail">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
      </Collapsible>
    </div>

    <table className="doc-table">
      <thead>
        <tr>
          <th>
            Usage
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <pre>
              {`<Collapsible label="Personal Detail">
  ...
</Collapsible>`}
            </pre>
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
            label
          </td>
          <td>
            string
          </td>
          <td>
            any
          </td>
          <td>
            yes
          </td>
          <td>
            Sets title for Collapsible.
          </td>
        </tr>
        <tr>
          <td>
            isCollapsing
          </td>
          <td>
            boolean
          </td>
          <td>
            <code>
              {'true | false'}
            </code>
          </td>
          <td>
            no
          </td>
          <td>
            Collapsing as default.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default CollapsibleStory;
