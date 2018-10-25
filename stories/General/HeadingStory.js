import React from 'react';

import Heading from '../../src/General/Heading';
import Collapsible from '../../src/Display/Collapsible';

const HeadingStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Heading
      </h1>
      <p>
        <code>
          {'import { Heading } from \'glints-aries\''}
        </code>
      </p>
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Heading>
        This is Heading
      </Heading>
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Collapsible label="Usage" isOpen={false}>
        <pre>
          {`<Heading>
  This is Heading
</Heading>`}
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
            inline
          </td>
          <td>
            boolean
          </td>
          <td>
            <code>
              false
            </code>
          </td>
          <td>
            <code>
              true | false
            </code>
          </td>
          <td>
            no
          </td>
          <td>
            Sets Heading into inline element.
          </td>
        </tr>
        <tr>
          <td>
            uppercaseText
          </td>
          <td>
            boolean
          </td>
          <td>
            <code>
              false
            </code>
          </td>
          <td>
            <code>
              true | false
            </code>
          </td>
          <td>
            no
          </td>
          <td>
            Sets Heading text to uppercase.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default HeadingStory;
