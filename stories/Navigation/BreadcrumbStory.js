import React from 'react';

import Breadcrumb from '../../src/Navigation/Breadcrumb';
import Collapsible from '../../src/Display/Collapsible';

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

    <div style={{ marginBottom: '2em' }}>
      <Breadcrumb>
        <Breadcrumb.Item>
          <a href="/home">Home</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/jobs">Jobs</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          <a href="/software-engineer">Software Engineer</a>
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Collapsible label="Usage" isOpen={false}>
        <pre>
          {`<Breadcrumb>
  <Breadcrumb.Item>
    <a href="/home">Home</a>
  </Breadcrumb.Item>
  <Breadcrumb.Item>
    <a href="/jobs">Jobs</a>
  </Breadcrumb.Item>
  <Breadcrumb.Item active>
    <a href="/software-engineer">
      Software Engineer
    </a>
  </Breadcrumb.Item>
</Breadcrumb>
              `}
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
          <td>
            active
          </td>
          <td>
            boolean
          </td>
          <td>
            <code>
              false
            </code>
          </td>
          <td>
            <code>
              true | false
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
