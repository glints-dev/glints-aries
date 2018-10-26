import React from 'react';

import Switch from '../../src/Input/Switch';
import Collapsible from '../../src/Display/Collapsible';

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

    <div style={{ marginBottom: '2em' }}>
      <div style={{ width: '300px' }}>
        <Switch
          label={['Full Time', 'Internship']}
          name={['job-type', 'job-type']}
          value={['full-time', 'internship']}
          defaultValue="full-time"
        />
      </div>
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Collapsible label="Usage" isOpen={false}>
        <pre>
          {`<Switch 
  label={['Full Time', 'Internship']} 
  name={['job-type', 'job-type']}
  value={['full-time', 'internship']} 
  defaultValue="full-time"
/>`}
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
            label
          </td>
          <td>
            array
          </td>
          <td></td>
          <td>
            any
          </td>
          <td>
            yes
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            name
          </td>
          <td>
            array
          </td>
          <td></td>
          <td>
            any
          </td>
          <td>
            yes
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            value
          </td>
          <td>
            array
          </td>
          <td></td>
          <td>
            any
          </td>
          <td>
            yes
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            defaultValue
          </td>
          <td>
            string
          </td>
          <td></td>
          <td>
            any
          </td>
          <td>
            yes
          </td>
          <td>
            To set initial value of Switch
          </td>
        </tr>
        <tr>
          <td>
            onChange
          </td>
          <td>
            function
          </td>
          <td></td>
          <td>
            function
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
