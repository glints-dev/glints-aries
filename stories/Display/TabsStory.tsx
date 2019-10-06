import * as React from 'react';

import Tabs from '../../src/Display/Tabs';
import Badge from '../../src/General/Badge';
import Divider from '../../src/General/Divider';
import Heading from '../../src/General/Heading';
import StorybookComponent from '../StorybookComponent';

import {
  TabAlignment,
  HorizontalTabVariant,
} from '../../src/Utils/StyleConfig';

const props = {
  Tabs: [
    {
      name: 'alignment',
      type: 'string',
      defaultValue: 'horizontal',
      possibleValue: 'horizontal, vertical',
      require: 'no',
      description:
        'Sets alignment of Tab. The vertical tabs are changed to horizontal ones for screen size below 768',
    },
    {
      name: 'variant',
      type: 'string',
      defaultValue: 'underlined',
      possibleValue: 'underlined, colored',
      require: 'no',
      description:
        'Set the change in the color pattern only for Horizontal tabs',
    },
  ],
};

// @ts-ignore
const TabsStory = () => (
  <React.Fragment>
    <StorybookComponent
      title="Tabs"
      code="import { Tabs } from 'glints-aries'"
      propsObject={props}
      usage={`<Tabs alignment="horizontal" variant="underlined">
        <Tabs.Pane tab="Location Tab">Tab Location</Tabs.Pane>
        <Tabs.Pane tab="Salary">Tab Salary</Tabs.Pane>
        <Tabs.Pane tab="Job">Tab Job</Tabs.Pane>
        <Tabs.Pane tab="Company">Tab Company</Tabs.Pane>
      </Tabs>`}
    >
      <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>
        Underlined Horizontal Navigation Tabs
      </Heading>
      <Tabs
        alignment={TabAlignment.HORIZONTAL}
        variant={HorizontalTabVariant.UNDERLINED}
      >
        <Tabs.Pane tab="Job">
          Software Engineer <Badge label="1" />
        </Tabs.Pane>
        <Tabs.Pane tab="Company">Glints</Tabs.Pane>
        <Tabs.Pane tab="Location">Jakarta</Tabs.Pane>
        <Tabs.Pane tab="Salary">Rp 10,000,000</Tabs.Pane>
      </Tabs>
    </StorybookComponent>

    <Divider theme="grey" />

    <StorybookComponent
      title="Tabs"
      code="import { Tabs } from 'glints-aries'"
      usage={`<Tabs alignment="horizontal" variant="colored">
        <Tabs.Pane tab="Location Tab">Tab Location</Tabs.Pane>
        <Tabs.Pane tab="Salary">Tab Salary</Tabs.Pane>
        <Tabs.Pane tab="Job">Tab Job</Tabs.Pane>
        <Tabs.Pane tab="Company">Tab Company</Tabs.Pane>
      </Tabs>`}
    >
      <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>
        Colored Horizontal Navigation Tabs
      </Heading>
      <Tabs
        alignment={TabAlignment.HORIZONTAL}
        variant={HorizontalTabVariant.COLORED}
      >
        <Tabs.Pane tab="Job">
          Software Engineer <Badge label="1" />
        </Tabs.Pane>
        <Tabs.Pane tab="Company">Glints</Tabs.Pane>
        <Tabs.Pane tab="Location">Jakarta</Tabs.Pane>
        <Tabs.Pane tab="Salary">Rp 10,000,000</Tabs.Pane>
      </Tabs>
    </StorybookComponent>

    <Divider theme="grey" />

    <StorybookComponent
      title="Tabs"
      code="import { Tabs } from 'glints-aries'"
      usage={`<Tabs alignment="vertical" variant="underlined">
        <Tabs.Pane tab="Location Tab">Tab Location</Tabs.Pane>
        <Tabs.Pane tab="Salary">Tab Salary</Tabs.Pane>
        <Tabs.Pane tab="Job">Tab Job</Tabs.Pane>
        <Tabs.Pane tab="Company">Tab Company</Tabs.Pane>
      </Tabs>`}
    >
      <Heading style={{ fontSize: '20px', marginBottom: '1em' }}>
        Vertical Navigation Tabs
      </Heading>
      <Tabs
        alignment={TabAlignment.VERTICAL}
        variant={HorizontalTabVariant.UNDERLINED}
      >
        <Tabs.Pane tab="Job">
          Software Engineer <Badge label="1" />
        </Tabs.Pane>
        <Tabs.Pane tab="Company">Glints</Tabs.Pane>
        <Tabs.Pane tab="Location">Jakarta</Tabs.Pane>
        <Tabs.Pane tab="Salary">Rp 10,000,000</Tabs.Pane>
      </Tabs>
    </StorybookComponent>
  </React.Fragment>
);

export default TabsStory;
