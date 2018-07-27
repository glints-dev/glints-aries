import React from 'react';
import Loading from '../src/Loading';

const LoadingStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Loading
      </h1>
      <p>
        <code>
          {'import { Loading } from \'glints-aries\''}
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
            <Loading size="small" text="saving" />
          </td>
          <td>
            <code>
              {'<Loading size="small" title="saving" />'}
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
            size
          </td>
          <td>
            string
          </td>
          <td>
            <pre>
              {'large | medium | small'}
            </pre>
          </td>
          <td>
            no
          </td>
          <td>
            Default value is
            {' '}
            <b>
              medium
            </b>
            .
          </td>
        </tr>
        <tr>
          <td>
            text
          </td>
          <td>
            string
          </td>
          <td>
            any
          </td>
          <td>
            no
          </td>
          <td>
            Sets title beside loader.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default LoadingStory;
