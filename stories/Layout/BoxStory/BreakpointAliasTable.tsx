import * as React from 'react';

import { StorybookTable } from '../../StorybookTable';
import { BreakpointAliases } from '../../../src/Layout/Box/types';

type Data = {
  alias: BreakpointAliases;
  device: string;
  description: string;
};

const dataSource: Data[] = [
  {
    alias: 'default',
    device: '-',
    description: 'define the base, non-responsive value',
  },
  {
    alias: 'mobileS',
    description: '@media screen and (min-width: 320px)',
    device: 'Mobile Small',
  },
  {
    alias: 'mobileM',
    description: '@media screen and (min-width: 480px)',
    device: 'Mobile Medium',
  },
  {
    alias: 'mobileL',
    description: '@media screen and (min-width: 640px)',
    device: 'Mobile Large',
  },
  {
    alias: 'tablet',
    description: '@media screen and (min-width: 768px)',
    device: 'Tablet',
  },
  {
    alias: 'desktopS',
    description: '@media screen and (min-width: 1024px)',
    device: 'Desktop Small',
  },
  {
    alias: 'desktopM',
    description: '@media screen and (min-width: 1260px)',
    device: 'Desktop Medium',
  },
  {
    alias: 'desktopL',
    device: 'Desktop Large',
    description: '@media screen and (min-width: 1440px)',
  },
];

const columns = [
  {
    title: 'Alias',
    dataIndex: 'alias',
  },
  {
    title: 'Device',
    dataIndex: 'device',
  },
  {
    title: 'Description',
    dataIndex: 'description',
  },
];

export const BreakpointAliasTable = () => (
  <StorybookTable
    title="Breakpoint Aliases table"
    dataSource={dataSource}
    columns={columns}
  />
);
