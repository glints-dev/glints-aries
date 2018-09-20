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
              {'<Heading>This is Heading</Heading>'}
            </code>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default HeadingStory;
