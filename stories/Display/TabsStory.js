import React from 'react';

import Tabs from '../../src/Display/Tabs';
import Collapsible from '../../src/Display/Collapsible';
import Badge from '../../src/General/Badge';

const TabsStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Tabs
      </h1>
      <p>
        <code>
          {'import { Tabs } from \'glints-aries\''}
        </code>
      </p>
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Tabs>
        <Tabs.Pane tab="Job">Software Engineer <Badge label="1" /></Tabs.Pane>
        <Tabs.Pane tab="Company">Glints</Tabs.Pane>
        <Tabs.Pane tab="Location">Jakarta</Tabs.Pane>
        <Tabs.Pane tab="Salary">Rp 10,000,000</Tabs.Pane>
      </Tabs>
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Collapsible label="Usage" isOpen={false}>
        <pre>
          {`<Tabs>
  <Tabs.Pane tab="Location Tab">Tab Location</Tabs.Pane>
  <Tabs.Pane tab="Salary">Tab Salary</Tabs.Pane>
  <Tabs.Pane tab="Job">Tab Job</Tabs.Pane>
  <Tabs.Pane tab="Company">Tab Company</Tabs.Pane>
</Tabs>`}
        </pre>
      </Collapsible>
    </div>

    <table className="doc-table">
      <thead>
        <tr style={{ borderBottom: '1px solid lightgrey' }}>
          <th colSpan="6">
            <h3 style={{ margin: '.8em 0' }}>
              <span style={{ fontWeight: '100' }}>Props for</span>
              {' '}
              Tabs.Pane
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
            tab
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
            {'Sets title of Tab'}
          </td>
        </tr>
      </tbody>
    </table>

  </div>
);

export default TabsStory;
