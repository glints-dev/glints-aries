import * as React from 'react';

import { StorybookTable } from '../../StorybookTable';

type Data = {
  alias: string;
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
    alias: 'ms',
    description: '@media screen and (min-width: 320px)',
    device: 'Mobile Small',
  },
  {
    alias: 'mm',
    description: '@media screen and (min-width: 480px)',
    device: 'Mobile Medium',
  },
  {
    alias: 'ml',
    description: '@media screen and (min-width: 640px)',
    device: 'Mobile Large',
  },
  {
    alias: 't',
    description: '@media screen and (min-width: 768px)',
    device: 'Tablet',
  },
  {
    alias: 'ds',
    description: '@media screen and (min-width: 1024px)',
    device: 'Desktop Small',
  },
  {
    alias: 'dm',
    description: '@media screen and (min-width: 1260px)',
    device: 'Desktop Medium',
  },
  {
    alias: 'dl',
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
