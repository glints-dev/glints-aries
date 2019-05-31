import * as React from 'react';

import StorybookComponent from '../StorybookComponent';

import Tabs from '../../src/Display/Tabs';
import Badge from '../../src/General/Badge';

const props = {
  Tabs: [
    {
      name: 'tab',
      type: 'string',
      defaultValue: '',
      possibleValue: 'any',
      require: 'yes',
      description: 'Sets title of Tab',
    },
  ],
};

const TabsStory = () => (
  <StorybookComponent
    title="Tabs"
    code="import { Tabs } from 'glints-aries'"
    propsObject={props}
    usage={`<Tabs>
  <Tabs.Pane tab="Location Tab">Tab Location</Tabs.Pane>
  <Tabs.Pane tab="Salary">Tab Salary</Tabs.Pane>
  <Tabs.Pane tab="Job">Tab Job</Tabs.Pane>
  <Tabs.Pane tab="Company">Tab Company</Tabs.Pane>
</Tabs>`}
  >
    <Tabs>
      <Tabs.Pane tab="Job">Software Engineer <Badge label="1" /></Tabs.Pane>
      <Tabs.Pane tab="Company">Glints</Tabs.Pane>
      <Tabs.Pane tab="Location">Jakarta</Tabs.Pane>
      <Tabs.Pane tab="Salary">Rp 10,000,000</Tabs.Pane>
    </Tabs>
  </StorybookComponent>
);

export default TabsStory;
