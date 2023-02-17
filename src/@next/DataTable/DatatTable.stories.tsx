import { Meta, Story } from '@storybook/react';
import React from 'react';

import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { DataTable, DataTableProps } from './DataTable';

(DataTable as React.FunctionComponent<DataTableProps>).displayName =
  'DataTable';

export default {
  title: '@next/DataTable',
  component: DataTable,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<void> = () => (
  <div>
    some text
    <DataTable />
    another text after DataTable
  </div>
);

export const Interactive = Template.bind({});

Interactive.args = {};
