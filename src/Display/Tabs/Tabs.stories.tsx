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

const OverflowTemplate: Story<Props> = ({ ...args }) => (
  <Tabs {...args}>
    <Tabs.Pane tab={'Tab 1'}>Tab 1</Tabs.Pane>
    <Tabs.Pane tab={'Tab 2'}>Tab 2</Tabs.Pane>
    <Tabs.Pane tab={'Tab 3'}>Tab 3</Tabs.Pane>
    <Tabs.Pane tab={'Tab 4'}> Tab 4</Tabs.Pane>
    <Tabs.Pane tab={'Tab 5'}>Tab 5</Tabs.Pane>
    <Tabs.Pane tab={'Tab 6'}>Tab 6</Tabs.Pane>
    <Tabs.Pane tab={'Tab 7'}>Tab 7</Tabs.Pane>
    <Tabs.Pane tab={'Tab 8'}>Tab 8</Tabs.Pane>
    <Tabs.Pane tab={'Tab 9'}>Tab 9</Tabs.Pane>
    <Tabs.Pane tab={'Tab 10'}>Tab 10</Tabs.Pane>
    <Tabs.Pane tab={'Tab 11'}>Tab 11</Tabs.Pane>
    <Tabs.Pane tab={'Tab 12'}>Tab 12</Tabs.Pane>
    <Tabs.Pane tab={'Tab 13'}>Tab 13</Tabs.Pane>
    <Tabs.Pane tab={'Tab 14'}>Tab 14</Tabs.Pane>
    <Tabs.Pane tab={'Tab 15'}>Tab 15</Tabs.Pane>
    <Tabs.Pane tab={'Tab 16'}>Tab 16</Tabs.Pane>
    <Tabs.Pane tab={'Tab 17'}>Tab 17</Tabs.Pane>
    <Tabs.Pane tab={'Tab 18'}>Tab 18</Tabs.Pane>
    <Tabs.Pane tab={'Tab 19'}>Tab 19</Tabs.Pane>
    <Tabs.Pane tab={'Tab 20'}>Tab 20</Tabs.Pane>
    <Tabs.Pane tab={'Tab 21'}>Tab 21</Tabs.Pane>
    <Tabs.Pane tab={'Tab 22'}>Tab 22</Tabs.Pane>
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

export const OverflowEffect = OverflowTemplate.bind({});
OverflowEffect.args = {
  theme: 'blue',
};
