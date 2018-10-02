import React from 'react';
import Loading from '../../src/General/Loading';

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
          <td style={{ padding: 20, fontSize: '24px' }}>
            <Loading />
          </td>
          <td>
            <code>
              {'<Loading />'}
            </code>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default LoadingStory;
