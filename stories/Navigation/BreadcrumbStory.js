import React from 'react';
import Breadcrumb from '../../src/Navigation/Breadcrumb';

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
            <Breadcrumb>
              <Breadcrumb.Item>
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                Jobs
              </Breadcrumb.Item>
              <Breadcrumb.Item active>
                Software Engineer
              </Breadcrumb.Item>
            </Breadcrumb>
          </td>
          <td>
            <pre>
              {`<Breadcrumb>
  <Breadcrumb.Item>Home</Breadcrumb.Item>
  <Breadcrumb.Item>Jobs</Breadcrumb.Item>
  <Breadcrumb.Item active>Software Engineer</Breadcrumb.Item>
</Breadcrumb>
              `}
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
            active
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
            yes
          </td>
          <td>
            Sets the current position on Breadcrumb.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default BreadcrumbStory;
