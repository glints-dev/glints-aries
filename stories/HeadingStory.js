import React from 'react';
import Heading from '../src/Heading';
import { Size } from '../src/Utils/StyleConfig';

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

    <table className="doc-table">
      <thead>
        <tr>
          <th colSpan="0">
            Preview
          </th>
          <th>
            Usage
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: 20 }}>
            <Heading>
              This is Heading
            </Heading>
          </td>
          <td>
            <code>
              {'<Heading inline>This is Heading</Heading>'}
            </code>
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
            inline
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
            Sets Heading into inline element.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default HeadingStory;
