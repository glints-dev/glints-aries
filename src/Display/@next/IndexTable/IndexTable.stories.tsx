import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  IndexTable,
  IndexTableProps,
  useIndexResourceState,
} from './IndexTable';
import { BaseContainer } from '../../../Layout/GlintsContainer/GlintsContainer';
import { Typography } from '../../../@next';
import { AppProvider } from 'polaris-glints';
import enTranslations from 'polaris-glints/locales/en.json';
import 'polaris-glints/build/esm/styles.css';

(IndexTable as React.FunctionComponent<IndexTableProps>).displayName = 'Table';

export default {
  title: 'IndexTable/@next/IndexTable',
  component: IndexTable,
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

const Template: Story<IndexTableProps> = args => {
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
      <IndexTable.Row
        id={id}
        key={id}
        selected={selectedResources.includes(id)}
        position={index}
      >
        <IndexTable.Cell>
          <Typography variant="caption">{name}</Typography>
        </IndexTable.Cell>
        <IndexTable.Cell>{location}</IndexTable.Cell>
        <IndexTable.Cell>{orders}</IndexTable.Cell>
        <IndexTable.Cell>{amountSpent}</IndexTable.Cell>
      </IndexTable.Row>
    )
  );
  return (
    // <AppProvider i18n={enTranslations}>
    <IndexTable
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
    </IndexTable>
    // </AppProvider>
  );
};

export const Interactive = Template.bind({});
Interactive.args = { size: 'default', disabled: false };
