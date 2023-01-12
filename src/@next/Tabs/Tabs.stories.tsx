/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';

import { TabModel, Tabs, TabsProps } from './Tabs';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { Typography } from '../Typography';
import {
  StyledColumn,
  StyledHeaderColumn,
  StyledRow,
  StyledTable,
} from './TabsStoriesStyle';

(Tabs as React.FunctionComponent<TabsProps>).displayName = 'Tabs';

export default {
  title: '@next/Tabs',
  component: Tabs,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
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
      language: 'html',
      type: 'auto',
    },
  },
};
