import React from 'react';
import Range from '../../src/Input/Range';

const RangeStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Range
      </h1>
      <p>
        <code>
          {'import { Range } from \'glints-aries\''}
        </code>
      </p>
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Range />
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
              {'<Range />'}
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
            Sets the label of radio button.
          </td>
        </tr>
        <tr>
          <td>
            name
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
          <td></td>
        </tr>
        <tr>
          <td>
            value
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
          <td></td>
        </tr>
        <tr>
          <td>
            checked
          </td>
          <td>
            boolean
          </td>
          <td>
            <pre>
              true | false
            </pre>
          </td>
          <td>
            no
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            theme
          </td>
          <td>
            boolean
          </td>
          <td>
            <code>
              white
            </code>
          </td>
          <td>
            no
          </td>
          <td>
            Default theme is black.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default RangeStory;
