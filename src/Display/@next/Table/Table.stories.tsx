import React from 'react';
import { Story, Meta } from '@storybook/react';
import { AppProvider } from '@shopify/polaris';
import { Table, TableProps, useIndexResourceState } from './Table';
import { BaseContainer } from '../../../Layout/GlintsContainer/GlintsContainer';
import { Typography } from '../../../@next';
import '@shopify/polaris/build/esm/styles.css';

(Table as React.FunctionComponent<TableProps>).displayName = 'Table';

export default {
  title: 'Table/@next/Table',
  component: Table,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} as Meta;

const customers = [
  {
    id: '3413',
    url: 'customers/341',
    name: 'Mae Jemison',
    location: 'Decatur, USA',
    orders: 20,
    amountSpent: '$2,400',
  },
  {
    id: '2563',
    url: 'customers/256',
    name: 'Ellen Ochoa',
    location: 'Los Angeles, USA',
    orders: 30,
    amountSpent: '$140',
  },
];
const resourceName = {
  singular: 'customer',
  plural: 'customers',
};

const Template: Story<TableProps> = args => {
  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(customers);

  const promotedBulkActions = [
    {
      content: 'Edit customers',
      onAction: () => console.log('Todo: implement bulk edit'),
    },
  ];
  const bulkActions = [
    {
      content: 'Add tags',
      onAction: () => console.log('Todo: implement bulk add tags'),
    },
    {
      content: 'Remove tags',
      onAction: () => console.log('Todo: implement bulk remove tags'),
    },
    {
      content: 'Delete customers',
      onAction: () => console.log('Todo: implement bulk delete'),
    },
  ];

  const rowMarkup = customers.map(
    ({ id, name, location, orders, amountSpent }, index) => (
      <Table.Row
        id={id}
        key={id}
        selected={selectedResources.includes(id)}
        position={index}
      >
        <Table.Cell>
          <Typography variant="caption">{name}</Typography>
        </Table.Cell>
        <Table.Cell>{location}</Table.Cell>
        <Table.Cell>{orders}</Table.Cell>
        <Table.Cell>{amountSpent}</Table.Cell>
      </Table.Row>
    )
  );
  return (
    <AppProvider>
      <Table
        resourceName={resourceName}
        itemCount={customers.length}
        selectedItemsCount={
          allResourcesSelected ? 'All' : selectedResources.length
        }
        onSelectionChange={handleSelectionChange}
        bulkActions={bulkActions}
        promotedBulkActions={promotedBulkActions}
        headings={[
          { title: 'Name' },
          { title: 'Location' },
          { title: 'Order count' },
          { title: 'Amount spent' },
        ]}
        {...args}
      >
        {rowMarkup}
      </Table>
    </AppProvider>
  );
};

export const Interactive = Template.bind({});
Interactive.args = { size: 'default', disabled: false };
