import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  IndexTable,
  IndexTableProps,
  useIndexResourceState,
} from './IndexTable';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { Typography } from '..';
import 'polaris-glints/build/esm/styles.css';
import { Checkbox } from '../Checkbox';
import { Icon } from '../Icon';

(IndexTable as React.FunctionComponent<IndexTableProps>).displayName = 'Table';

export default {
  title: '@next/IndexTable',
  component: IndexTable,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} as Meta;

const candidates = [
  {
    id: '3413',
    url: 'candidate/341',
    name: 'Dwi Nugraha Putri',
    location: 'Jakarta, Indonesia',
    expectedSalary: 'Rp 11,400,000/mo',
    yearsExperience: '4 years, 3 months',
  },
  {
    id: '2563',
    url: 'candidate/256',
    name: 'Ahmad Dani',
    location: 'Jakarta, Indonesia',
    expectedSalary: 'Rp 11,400,000/mo',
    yearsExperience: '4 years, 3 months',
  },
];
const resourceName = {
  singular: 'candidate',
  plural: 'candidates',
};

const Template: Story<IndexTableProps> = args => {
  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(candidates);

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

  const rowMarkup = candidates.map(
    ({ id, name, location, expectedSalary, yearsExperience }, index) => (
      <IndexTable.Row
        id={id}
        key={id}
        selected={selectedResources.includes(id)}
        position={index}
        checkbox={<Checkbox />}
        // checkbox="text"
      >
        <IndexTable.Cell>
          <Icon name="ri-account-circle-fill" height={40} />
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Typography variant="body2">{name}</Typography>
          <Typography variant="body1">{location}</Typography>
        </IndexTable.Cell>
        <IndexTable.Cell>{expectedSalary}</IndexTable.Cell>
        <IndexTable.Cell>{yearsExperience}</IndexTable.Cell>
        <IndexTable.Cell>ButtonGroup</IndexTable.Cell>
      </IndexTable.Row>
    )
  );
  return (
    // <AppProvider i18n={translations}>
    <IndexTable
      // checkbox={<Checkbox />}
      resourceName={resourceName}
      itemCount={candidates.length}
      selectedItemsCount={
        allResourcesSelected ? 'All' : selectedResources.length
      }
      onSelectionChange={handleSelectionChange}
      bulkActions={bulkActions}
      promotedBulkActions={promotedBulkActions}
      headings={[
        { title: '' },
        { title: 'Name & Location' },
        { title: 'Expected Salary' },
        { title: 'Years of Experience' },
        { title: 'Actions' },
      ]}
      {...args}
    >
      {rowMarkup}
    </IndexTable>
    // </AppProvider>
  );
};

export const Interactive = Template.bind({});
