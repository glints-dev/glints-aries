import React from 'react';
import Divider from '../../src/General/Divider';

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
            <Divider />
          </td>
          <td>
            <code>
              {'<Divider />'}
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
            theme
          </td>
          <td>
            string
          </td>
          <td>
            <pre>
              red | blue | yellow | white | grey
            </pre>
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
