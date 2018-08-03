import React from 'react';
import Switch from '../src/Switch';

const SwitchStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Switch
      </h1>
      <p>
        <code>
          {'import { Switch } from \'glints-aries\''}
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
            <Switch label={['Full Time', 'Internship']} name={['job-type', 'job-type']} value={['full-time', 'intership']} />
          </td>
          <td>
            <pre>
              {`<Switch 
  label={['Full Time', 'Internship']} 
  name={['job-type', 'job-type']}
  value={['full-time', 'internship']} 
  />`}
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
            label
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
            the value is an array to give value into left and right item.
          </td>
        </tr>
        <tr>
          <td>
            name
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
            the value is an array to give value into left and right item.
          </td>
        </tr>
        <tr>
          <td>
            value
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
            the value is an array to give value into left and right item.
          </td>
        </tr>
        <tr>
          <td>
            onChange
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
          <td>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default SwitchStory;
