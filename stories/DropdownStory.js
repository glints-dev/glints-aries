import React from 'react';
import Dropdown from '../src/Dropdown';

const DropdownStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Dropdown
      </h1>
      <p>
        <code>
          {'import { Dropdown } from \'glints-aries\''}
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
            <Dropdown title="This Career" size="large">
              <Dropdown.Body>
                <Dropdown.Item>
                  Accounting
                </Dropdown.Item>
                <Dropdown.Item>
                  Art & Design
                </Dropdown.Item>
                <Dropdown.Item>
                  Business Development
                </Dropdown.Item>
                <Dropdown.Item>
                  Consulting
                </Dropdown.Item>
                <Dropdown.Item>
                  Engineering
                </Dropdown.Item>
                <Dropdown.Item>
                  Entrepreneurship
                </Dropdown.Item>
                <Dropdown.Item>
                  Finance
                </Dropdown.Item>
                <Dropdown.Item>
                  General Affair
                </Dropdown.Item>
                <Dropdown.Item>
                  Human Resources
                </Dropdown.Item>
              </Dropdown.Body>
            </Dropdown>
          </td>
          <td>
            <pre>
              {`<Dropdown title="This Career" size="medium">
  <Dropdown.Body>
    <Dropdown.Item onClick={...}>Accounting</Dropdown.Item>
    <Dropdown.Item>Art & Design</Dropdown.Item>
    <Dropdown.Item>Business Development</Dropdown.Item>
    <Dropdown.Item>Consulting</Dropdown.Item>
    <Dropdown.Item>Engineering</Dropdown.Item>
  </Dropdown.Body>
</Dropdown>`}
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
            title
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
            Sets the dropdown title.
          </td>
        </tr>
        <tr>
          <td>
            size
          </td>
          <td>
            string
          </td>
          <td>
            <pre>
              large | medium | small
            </pre>
          </td>
          <td>
            no
          </td>
          <td>
            Sets the size of dropdown.
          </td>
        </tr>
        <tr>
          <td>
            onClick
          </td>
          <td>
            Function
          </td>
          <td>
            any
          </td>
          <td>
            no
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default DropdownStory;
