import * as React from 'react';

import Tabs from '../../src/Display/Tabs';
import Badge from '../../src/General/Badge';
import Divider from '../../src/General/Divider';
import Heading from '../../src/General/Heading';
import Collapsible from '../../src/Display/Collapsible';

import { TabVariant, HorizontalTabTheme } from '../../src/Utils/StyleConfig';

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
      <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>Horizontal Navigation Tabs</Heading>
      <Tabs variant={TabVariant.HORIZONTAL} theme={HorizontalTabTheme.WHITE}>
        <Tabs.Pane tab="Job">Software Engineer <Badge label="1" /></Tabs.Pane>
        <Tabs.Pane tab="Company">Glints</Tabs.Pane>
        <Tabs.Pane tab="Location">Jakarta</Tabs.Pane>
        <Tabs.Pane tab="Salary">Rp 10,000,000</Tabs.Pane>
      </Tabs>
    </div>
    <div style={{ marginBottom: '2em' }}>
      <Collapsible label="Usage" isOpen={false}>
        <pre>
          {`<Tabs variant="horizontal" theme="white">
         <Tabs.Pane tab="Location Tab">Tab Location</Tabs.Pane>
         <Tabs.Pane tab="Salary">Tab Salary</Tabs.Pane>
         <Tabs.Pane tab="Job">Tab Job</Tabs.Pane>
         <Tabs.Pane tab="Company">Tab Company</Tabs.Pane>
      </Tabs>`}
        </pre>
      </Collapsible>
    </div>
    <div style={{ marginBottom: '4em' }}>
      <table className="doc-table">
        <thead>
        <tr style={{borderBottom: '1px solid lightgrey'}}>
          <th colspan={6}>
            <h3 style={{margin: '.8em 0'}}>
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
              variant
            </td>
            <td>
              string
            </td>
            <td>
              horizontal
            </td>
            <td>
              horizontal
            </td>
            <td>
              yes
            </td>
            <td>
              Sets the flow of the Navigation Tabs
            </td>
          </tr>
          <tr>
            <td>
              tab
            </td>
            <td>
              string
            </td>
            <td></td>
            <td>any</td>
            <td>
              yes
            </td>
            <td>
              Sets title of Tab
            </td>
          </tr>
          <tr>
            <td>
              theme
            </td>
            <td>
              string
            </td>
            <td></td>
            <td>white | grey</td>
            <td>
              yes
            </td>
            <td>
              Sets theme color for Hovering Tabs
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Divider theme="grey" />
    <div style={{ marginBottom: '2em' }}>
      <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>Vertical Navigation Tabs</Heading>
      <Tabs variant={TabVariant.VERTICAL}>
        <Tabs.Pane tab="Job">Software Engineer <Badge label="1" /></Tabs.Pane>
        <Tabs.Pane tab="Company">Glints</Tabs.Pane>
        <Tabs.Pane tab="Location">Jakarta</Tabs.Pane>
        <Tabs.Pane tab="Salary">Rp 10,000,000</Tabs.Pane>
      </Tabs>
    </div>
    <div style={{ marginBottom: '2em' }}>
      <Collapsible label="Usage" isOpen={false}>
        <pre>
          {`<Tabs variant="vertical">
         <Tabs.Pane tab="Location Tab">Tab Location</Tabs.Pane>
         <Tabs.Pane tab="Salary">Tab Salary</Tabs.Pane>
         <Tabs.Pane tab="Job">Tab Job</Tabs.Pane>
         <Tabs.Pane tab="Company">Tab Company</Tabs.Pane>
      </Tabs>`}
        </pre>
      </Collapsible>
    </div>
    <div style={{ marginBottom: '4em' }}>
      <table className="doc-table">
        <thead>
        <tr style={{borderBottom: '1px solid lightgrey'}}>
          <th colspan={6}>
            <h3 style={{margin: '.8em 0'}}>
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
            variant
          </td>
          <td>
            string
          </td>
          <td>horizontal</td>
          <td>vertical</td>
          <td>
            yes
          </td>
          <td>
            Sets the flow of the Navigation Tabs
          </td>
        </tr>
        <tr>
          <td>
            tab
          </td>
          <td>
            string
          </td>
          <td></td>
          <td>any</td>
          <td>
            yes
          </td>
          <td>
            Sets title of Tab
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default TabsStory;
