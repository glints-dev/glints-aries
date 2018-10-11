import React from 'react';

import Progress from '../../src/Display/Progress';

const ProgressStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Progress
      </h1>
      <p>
        <code>
          {'import { Progress } from \'glints-aries\''}
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
            <Progress percentage={54} />
          </td>
          <td>
            <pre>
              {'<Progress percentage={54} />'}
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
          <td>percentage</td>
          <td>number</td>
          <td>0 - 100</td>
          <td>Yes</td>
          <td>Sets progress value.</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default ProgressStory;
