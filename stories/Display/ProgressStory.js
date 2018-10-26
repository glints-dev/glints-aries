import React from 'react';

import Progress from '../../src/Display/Progress';
import Collapsible from '../../src/Display/Collapsible';

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

    <div style={{ marginBottom: '2em' }}>
      <Progress percentage={54} />
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Collapsible label="Usage" isOpen={false}>
        <pre>
          {'<Progress percentage={54} />'}
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
          <td>percentage</td>
          <td>number</td>
          <td></td>
          <td>0 - 100</td>
          <td>Yes</td>
          <td>Sets progress value.</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default ProgressStory;
