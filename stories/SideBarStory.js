import React from 'react';
import Select from '../src/Select';
import SideBar from '../src/SideBar';

const SelectStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Select
      </h1>
      <p>
        <code>
          {'import { Select } from \'glints-aries\''}
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
            <div>
              <div
                style={{
                  height: 60,
                  width: 200,
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  textAlign: 'center',
                }}
              >
                Header
              </div>
              <div
                style={{
                  height: 100,
                  width: 200,
                  backgroundColor: 'rgba(0, 0, 0, 0.1)',
                  textAlign: 'center',
                }}
              >
                Content
              </div>
            </div>
          </td>
          <td>
            <pre>
              {`<SideBar
    mobileMediaQuery={300}
    headerComponent={<div>header</div>}
    sideBarComponent={<div>sometin</div>}
    tempRows="60px 1fr"
    headerHeight={60}
    isOpen
    >
        <div>content</div>
</SideBar>`}
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
          <th>Name</th>
          <th>Type</th>
          <th>Value</th>
          <th>Required</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>mobileMediaQuery</td>
          <td>number</td>
          <td>any</td>
          <td>no</td>
          <td>Max width for Media Query to render sidebar</td>
        </tr>
        <tr>
          <td>headerHeight</td>
          <td>number</td>
          <td>any</td>
          <td>no</td>
          <td>Height for header</td>
        </tr>
        <tr>
          <td>headerComponent</td>
          <td>ReactNode</td>
          <td>-</td>
          <td>no</td>
          <td>Component to render in header</td>
        </tr>
        <tr>
          <td>sideBarComponent</td>
          <td>ReactNode</td>
          <td>-</td>
          <td>no</td>
          <td>Component to render in sidebar</td>
        </tr>
        <tr>
          <td>isOpen</td>
          <td>boolean</td>
          <td><pre>true | false</pre></td>
          <td>no</td>
          <td>Open/Close sidebar</td>
        </tr>
        <tr>
          <td>tempRows</td>
          <td>string</td>
          <td>any</td>
          <td>no</td>
          <td>Grid template for rows</td>
        </tr>
        <tr>
          <td>tempCols</td>
          <td>string</td>
          <td>any</td>
          <td>no</td>
          <td>Grid template for cols</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default SelectStory;
