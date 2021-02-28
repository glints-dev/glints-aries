import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Tabs, Props } from './Tabs';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import Badge from '../../General/Badge';

export default {
  title: 'Display/Tabs',
  component: Tabs,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
    activeTab: {
      control: {
        type: null,
      },
    },
    onTabClick: {
      control: {
        type: null,
      },
    },
  },
} as Meta;

const Template: Story<Props> = ({ ...args }) => (
  <Tabs {...args}>
    <Tabs.Pane tab={'Location Tab'}>Tab Location</Tabs.Pane>
    <Tabs.Pane tab="Salary">Tab Salary</Tabs.Pane>
    <Tabs.Pane tab="Job">Tab Job</Tabs.Pane>
    <Tabs.Pane
      tab={
        <div>
          <Badge label={4} />
          Company
        </div>
      }
    >
      Tab Company
    </Tabs.Pane>
  </Tabs>
);

export const Interactive = Template.bind({});

export const Alignment = Template.bind({});
Alignment.args = {
  alignment: 'vertical',
};

export const Theme = Template.bind({});
Theme.args = {
  theme: 'blue',
};
