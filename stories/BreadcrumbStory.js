import React from 'react';
import Breadcrumb from '../src/Breadcrumb';

const BreadcrumbStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Breadcrumb
      </h1>
      <p>
        <code>
          {'import { Breadcrumb } from \'glints-aries\''}
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
            <Breadcrumb bgColor="#f3f3f3">
              <Breadcrumb.Item>
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                Jobs
              </Breadcrumb.Item>
              <Breadcrumb.Item className="active">
                Software Engineer
              </Breadcrumb.Item>
            </Breadcrumb>
          </td>
          <td>
            <pre>
              {`<Breadcrumb>
  <Breadcrumb.Item>
    Home
  </Breadcrumb.Item>
  <Breadcrumb.Item>
    Jobs
  </Breadcrumb.Item>
  <Breadcrumb.Item className="active">
    Software Engineer
  </Breadcrumb.Item>
</Breadcrumb>
              `}
            </pre>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default BreadcrumbStory;
