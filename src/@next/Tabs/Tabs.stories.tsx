/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';

import { TabModel, Tabs, TabsProps } from './Tabs';
import { Typography } from '../Typography';
import {
  StyledColumn,
  StyledHeaderColumn,
  StyledRow,
  StyledTable,
} from './TabsStoriesStyle';
import { withGlintsPortalContainer } from '../../helpers/storybook/Decorators';

(Tabs as React.FunctionComponent<TabsProps>).displayName = 'Tabs';

export default {
  title: '@next/Tabs',
  component: Tabs,
  decorators: [withGlintsPortalContainer],
} as Meta;

const Template: Story<TabsProps> = args => {
  const [selected, setSelected] = useState(args.selected || 0);
  const tabs: TabModel[] = [
    { id: 'id-tab-1', content: 'Tab #1' },
    { id: 'id-tab-2', content: 'Tab #2' },
  ];

  const Table = () => {
    return (
      <StyledTable>
        <StyledRow>
          <StyledHeaderColumn>Company</StyledHeaderColumn>
          <StyledHeaderColumn>Contact</StyledHeaderColumn>
          <StyledHeaderColumn>Country</StyledHeaderColumn>
        </StyledRow>
        <StyledRow>
          <StyledColumn>Alfreds Futterkiste</StyledColumn>
          <StyledColumn>Maria Anders</StyledColumn>
          <StyledColumn>Germany</StyledColumn>
        </StyledRow>
        <StyledRow>
          <StyledColumn>Centro comercial Moctezuma</StyledColumn>
          <StyledColumn>Francisco Chang</StyledColumn>
          <StyledColumn>Mexico</StyledColumn>
        </StyledRow>
        <StyledRow>
          <StyledColumn>Ernst Handel</StyledColumn>
          <StyledColumn>Roland Mendel</StyledColumn>
          <StyledColumn>Austria</StyledColumn>
        </StyledRow>
        <StyledRow>
          <StyledColumn>Island Trading</StyledColumn>
          <StyledColumn>Helen Bennett</StyledColumn>
          <StyledColumn>UK</StyledColumn>
        </StyledRow>
      </StyledTable>
    );
  };

  const tabContents = [
    <Table />,
    <Typography variant="body2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Typography>,
  ];

  return (
    <Tabs
      tabs={tabs}
      selected={selected}
      onSelected={i => setSelected(i)}
      fitted={args.fitted}
    >
      {tabContents[selected]}
    </Tabs>
  );
};

export const Interactive = Template.bind({});
Interactive.args = {};
Interactive.parameters = {
  docs: {
    source: {
      code: `const [selected, setSelected] = useState(args.selected || 0);
      const tabs: TabModel[] = [
        { id: 'id-tab-1', content: 'Tab #1' },
        { id: 'id-tab-2', content: 'Tab #2' },
      ];
    
      const Table = () => {
        return (
          <StyledTable>
            <StyledRow>
              <StyledHeaderColumn>Company</StyledHeaderColumn>
              <StyledHeaderColumn>Contact</StyledHeaderColumn>
              <StyledHeaderColumn>Country</StyledHeaderColumn>
            </StyledRow>
            <StyledRow>
              <StyledColumn>Alfreds Futterkiste</StyledColumn>
              <StyledColumn>Maria Anders</StyledColumn>
              <StyledColumn>Germany</StyledColumn>
            </StyledRow>
            <StyledRow>
              <StyledColumn>Centro comercial Moctezuma</StyledColumn>
              <StyledColumn>Francisco Chang</StyledColumn>
              <StyledColumn>Mexico</StyledColumn>
            </StyledRow>
            <StyledRow>
              <StyledColumn>Ernst Handel</StyledColumn>
              <StyledColumn>Roland Mendel</StyledColumn>
              <StyledColumn>Austria</StyledColumn>
            </StyledRow>
            <StyledRow>
              <StyledColumn>Island Trading</StyledColumn>
              <StyledColumn>Helen Bennett</StyledColumn>
              <StyledColumn>UK</StyledColumn>
            </StyledRow>
          </StyledTable>
        );
      };
    
      const tabContents = [
        <Table />,
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Typography>,
      ];
    
      return (
        <Tabs
          tabs={tabs}
          selected={selected}
          onSelected={i => setSelected(i)}
          fitted={args.fitted}
        >
          {tabContents[selected]}
        </Tabs>
      );
    };`,
      language: 'javascript',
      type: 'auto',
    },
  },
};

const OverflowTemplate: Story<TabsProps> = args => {
  const [selected, setSelected] = useState(args.selected || 0);
  const tabs: TabModel[] = [
    { id: 'id-tab-1', content: 'Tab #1' },
    { id: 'id-tab-2', content: 'Tab #2' },
    { id: 'id-tab-3', content: 'Tab #3' },
    { id: 'id-tab-4', content: 'Tab #4' },
    { id: 'id-tab-5', content: 'Tab #5' },
    { id: 'id-tab-6', content: 'Tab #6' },
    { id: 'id-tab-7', content: 'Tab #7' },
    { id: 'id-tab-8', content: 'Tab #8' },
    { id: 'id-tab-9', content: 'Tab #9' },
    { id: 'id-tab-10', content: 'Tab #10' },
    { id: 'id-tab-11', content: 'Tab #11' },
    { id: 'id-tab-12', content: 'Tab #12' },
    { id: 'id-tab-13', content: 'Tab #13' },
    { id: 'id-tab-14', content: 'Tab #14' },
    { id: 'id-tab-15', content: 'Tab #15' },
    { id: 'id-tab-16', content: 'Tab #16' },
    { id: 'id-tab-17', content: 'Tab #17' },
    { id: 'id-tab-18', content: 'Tab #18' },
    { id: 'id-tab-19', content: 'Tab #19' },
    { id: 'id-tab-20', content: 'Tab #20' },
  ];

  const Table = () => {
    return (
      <StyledTable>
        <StyledRow>
          <StyledHeaderColumn>Company</StyledHeaderColumn>
          <StyledHeaderColumn>Contact</StyledHeaderColumn>
          <StyledHeaderColumn>Country</StyledHeaderColumn>
        </StyledRow>
        <StyledRow>
          <StyledColumn>Alfreds Futterkiste</StyledColumn>
          <StyledColumn>Maria Anders</StyledColumn>
          <StyledColumn>Germany</StyledColumn>
        </StyledRow>
        <StyledRow>
          <StyledColumn>Centro comercial Moctezuma</StyledColumn>
          <StyledColumn>Francisco Chang</StyledColumn>
          <StyledColumn>Mexico</StyledColumn>
        </StyledRow>
        <StyledRow>
          <StyledColumn>Ernst Handel</StyledColumn>
          <StyledColumn>Roland Mendel</StyledColumn>
          <StyledColumn>Austria</StyledColumn>
        </StyledRow>
        <StyledRow>
          <StyledColumn>Island Trading</StyledColumn>
          <StyledColumn>Helen Bennett</StyledColumn>
          <StyledColumn>UK</StyledColumn>
        </StyledRow>
      </StyledTable>
    );
  };

  const tabContents = [
    <Table />,
    <Typography variant="body2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Typography>,
  ];

  return (
    <Tabs
      tabs={tabs}
      selected={selected}
      onSelected={i => setSelected(i)}
      fitted={args.fitted}
    >
      {tabContents[selected]}
    </Tabs>
  );
};

export const Overflow = OverflowTemplate.bind({});
Overflow.args = {};
Overflow.parameters = {
  docs: {
    source: {
      code: `const [selected, setSelected] = useState(args.selected || 0);
      const tabs: TabModel[] = [
        { id: 'id-tab-1', content: 'Tab #1' },
        { id: 'id-tab-2', content: 'Tab #2' },
      ];
    
      const Table = () => {
        return (
          <StyledTable>
            <StyledRow>
              <StyledHeaderColumn>Company</StyledHeaderColumn>
              <StyledHeaderColumn>Contact</StyledHeaderColumn>
              <StyledHeaderColumn>Country</StyledHeaderColumn>
            </StyledRow>
            <StyledRow>
              <StyledColumn>Alfreds Futterkiste</StyledColumn>
              <StyledColumn>Maria Anders</StyledColumn>
              <StyledColumn>Germany</StyledColumn>
            </StyledRow>
            <StyledRow>
              <StyledColumn>Centro comercial Moctezuma</StyledColumn>
              <StyledColumn>Francisco Chang</StyledColumn>
              <StyledColumn>Mexico</StyledColumn>
            </StyledRow>
            <StyledRow>
              <StyledColumn>Ernst Handel</StyledColumn>
              <StyledColumn>Roland Mendel</StyledColumn>
              <StyledColumn>Austria</StyledColumn>
            </StyledRow>
            <StyledRow>
              <StyledColumn>Island Trading</StyledColumn>
              <StyledColumn>Helen Bennett</StyledColumn>
              <StyledColumn>UK</StyledColumn>
            </StyledRow>
          </StyledTable>
        );
      };
    
      const tabContents = [
        <Table />,
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Typography>,
      ];
    
      return (
        <Tabs
          tabs={tabs}
          selected={selected}
          onSelected={i => setSelected(i)}
          fitted={args.fitted}
        >
          {tabContents[selected]}
        </Tabs>
      );
    };`,
      language: 'javascript',
      type: 'auto',
    },
  },
};

const DisabledTemplate: Story<TabsProps> = args => {
  const [selected, setSelected] = useState(args.selected || 0);
  const tabs: TabModel[] = [
    { id: 'id-tab-1', content: 'Tab #1' },
    { id: 'id-tab-2', content: 'Tab #2' },
    { id: 'id-tab-3', content: 'Tab #3 (Disabled)', disabled: true },
  ];

  const tabContents = [
    <Typography variant="body2">Tab #1</Typography>,
    <Typography variant="body2">Tab #2</Typography>,
  ];

  return (
    <Tabs
      tabs={tabs}
      selected={selected}
      onSelected={i => setSelected(i)}
      fitted={args.fitted}
    >
      {tabContents[selected]}
    </Tabs>
  );
};

export const Disabled = DisabledTemplate.bind({});
