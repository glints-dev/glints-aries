import React from 'react';
import { Dropdown, DropdownBody, DropdownItem } from './../src/Dropdown';
import { Size } from '../src/Utils/StyleConfig';

const DropdownStory = () => {
  return (
    <div className="doc-mainbar">
      <div style={{ marginBottom: '2em' }}>
        <h1>Dropdown</h1>
        <p><code>{`import { Dropdown, DropdownBody, DropdownItem } from 'glints-aries'`}</code></p>
      </div>

      <table className="doc-table">
        <thead>
          <tr>
            <th colSpan="0">
              Preview
            </th>
            <th>Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{padding: 20}}>
              <Dropdown title="This Career" size="medium">
                <DropdownBody>
                  <DropdownItem>Accounting</DropdownItem>
                  <DropdownItem>Art & Design</DropdownItem>
                  <DropdownItem>Business Development</DropdownItem>
                  <DropdownItem>Consulting</DropdownItem>
                  <DropdownItem>Engineering</DropdownItem>
                  <DropdownItem>Entrepreneurship</DropdownItem>
                  <DropdownItem>Finance</DropdownItem>
                  <DropdownItem>General Affair</DropdownItem>
                  <DropdownItem>Human Resources</DropdownItem>
                </DropdownBody>
              </Dropdown>
            </td>
            <td><pre>{`<Dropdown title="This Career" size="medium">
  <DropdownBody>
    <DropdownItem>Accounting</DropdownItem>
    <DropdownItem>Art & Design</DropdownItem>
    <DropdownItem>Business Development</DropdownItem>
    <DropdownItem>Consulting</DropdownItem>
    <DropdownItem>Engineering</DropdownItem>
  </DropdownBody>
</Dropdown>`}</pre></td>
          </tr>
        </tbody>
      </table>

      <h1>Props</h1>
      <table className="doc-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Value</th>
            <th>Required</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>title</td>
            <td>string</td>
            <td>any</td>
            <td>yes</td>
            <td>Sets the dropdown title.</td>
          </tr>
          <tr>
            <td>size</td>
            <td>string</td>
            <td><pre>{`large | medium | small`}</pre></td>
            <td>no</td>
            <td>Sets the size of dropdown.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DropdownStory;
