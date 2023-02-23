import { Meta, Story } from '@storybook/react';
import React from 'react';

import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { Button, PrimaryButton } from '../Button';
import { ButtonGroup } from '../ButtonGroup';
import { EmptyState } from '../EmptyState';
import { Pagination } from '../Pagination';
import { Typography } from '../Typography';
import { Neutral } from '../utilities/colors';
import {
  DataTable,
  DataTableProps,
  SortDirection,
  TableHeading,
  Total,
} from './DataTable';

(DataTable as React.FunctionComponent<DataTableProps>).displayName =
  'DataTable';

export default {
  title: '@next/DataTable',
  component: DataTable,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<DataTableProps> = ({
  loading,
  ...args
}: DataTableProps) => {
  const headings: TableHeading[] = [
    { title: 'Label' },
    { title: 'Variant' },
    { title: 'SKU Number' },
    {
      id: 'unit-sold',
      title: 'Unit sold',
      defaultSortDirection: 'ASCENDING',
      align: 'right',
    },
    {
      title: 'Total Price',
      align: 'right',
    },
    {
      title: 'Actions',
      align: 'center',
    },
  ];

  const rawData: any[] = [
    {
      label: 'Item 1',
      variant: 'Variant 1',
      skuNumber: '001',
      unitSold: 1,
      totalPrice: '$10,000',
    },
    {
      label: 'Item 1',
      variant: 'Variant 2',
      skuNumber: '0012',
      unitSold: 2,
      totalPrice: '$11,000',
    },
    {
      label: 'Item 2',
      variant: 'Variant 2',
      skuNumber: '002',
      unitSold: 3,
      totalPrice: '$12,000',
    },
    {
      label: 'Item 3',
      variant: 'Variant 3',
      skuNumber: '003',
      unitSold: 4,
      totalPrice: '$13,000',
    },
    {
      label: 'Item 4',
      variant: 'Variant 4',
      skuNumber: '004',
      unitSold: 5,
      totalPrice: '$14,000',
    },
  ];

  const totals: Total[] = [
    { title: 'Totals' },
    null,
    null,
    { title: '456', align: 'right' },
    { title: '$123,456.00', align: 'right' },
    null,
  ];

  const [sortedData, setSortedData] = React.useState(null);

  const data = sortedData ? sortedData : rawData;

  const handleSort = (context: string, sortDirection: SortDirection) => {
    if (context !== 'unit-sold') {
      return;
    }
    const sorted = [...data].sort((a, b) =>
      sortDirection === 'ASCENDING'
        ? a.unitSold - b.unitSold
        : b.unitSold - a.unitSold
    );

    setSortedData(sorted);
  };

  const emptyState = (
    <EmptyState
      title="No result"
      primaryButtonAction={{ label: 'Back to Dashboard' }}
      imageName="empty-carton"
    />
  );

  return (
    <DataTable
      {...args}
      headings={headings}
      totals={totals}
      onSortChanged={handleSort}
      emptyState={emptyState}
      loading={loading}
    >
      {data.map((dt: any, index: number) => {
        return (
          <DataTable.Row key={index}>
            <DataTable.Cell>{dt.label}</DataTable.Cell>
            <DataTable.Cell>{dt.variant}</DataTable.Cell>
            <DataTable.Cell>{dt.skuNumber}</DataTable.Cell>
            <DataTable.Cell align="right">{dt.unitSold}</DataTable.Cell>
            <DataTable.Cell align="right">{dt.totalPrice}</DataTable.Cell>
            <DataTable.Cell align="center">
              <ButtonGroup>
                <Button>Move</Button> <PrimaryButton>Update</PrimaryButton>
              </ButtonGroup>
            </DataTable.Cell>
          </DataTable.Row>
        );
      })}
      {!loading && (
        <DataTable.Footer>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography as="div" variant="body1" color={Neutral.B40}>
              Showing 5 of 100
            </Typography>
            <Pagination totalItems={100} pageSize={5} />
          </div>
        </DataTable.Footer>
      )}
    </DataTable>
  );
};

export const Interactive = Template.bind({});

Interactive.args = { loadingLabel: 'Loading...' };
Interactive.parameters = {
  docs: {
    source: {
      code: `
      const headings: TableHeading[] = [
        { title: 'Label' },
        { title: 'Variant' },
        { title: 'SKU Number' },
        {
          id: 'unit-sold',
          title: 'Unit sold',
          defaultSortDirection: 'ASCENDING',
          align: 'right',
        },
        {
          title: 'Total Price',
          align: 'right',
        },
        {
          title: 'Actions',
          align: 'center',
        },
      ];
    
      const rawData: any[] = [
        {
          label: 'Item 1',
          variant: 'Variant 1',
          skuNumber: '001',
          unitSold: 1,
          totalPrice: '$10,000',
        },
        {
          label: 'Item 1',
          variant: 'Variant 2',
          skuNumber: '0012',
          unitSold: 2,
          totalPrice: '$11,000',
        },
        {
          label: 'Item 2',
          variant: 'Variant 2',
          skuNumber: '002',
          unitSold: 3,
          totalPrice: '$12,000',
        },
        {
          label: 'Item 3',
          variant: 'Variant 3',
          skuNumber: '003',
          unitSold: 4,
          totalPrice: '$13,000',
        },
        {
          label: 'Item 4',
          variant: 'Variant 4',
          skuNumber: '004',
          unitSold: 5,
          totalPrice: '$14,000',
        },
      ];
    
      const totals: Total[] = [
        { title: 'Totals' },
        null,
        null,
        { title: '456', align: 'right' },
        { title: '$123,456.00', align: 'right' },
        null,
      ];
    
      const [sortedData, setSortedData] = React.useState(null);
    
      const data = sortedData ? sortedData : rawData;
    
      const handleSort = (context: string, sortDirection: SortDirection) => {
        if (context !== 'unit-sold') {
          return;
        }
        const sorted = [...data].sort((a, b) =>
          sortDirection === 'ASCENDING'
            ? a.unitSold - b.unitSold
            : b.unitSold - a.unitSold
        );
    
        setSortedData(sorted);
      };
    
      const emptyState = (
        <EmptyState
          title="No result"
          primaryButtonAction={{ label: 'Back to Dashboard' }}
          imageName="empty-carton"
        />
      );
    
      return (
        <DataTable
          {...args}
          headings={headings}
          totals={totals}
          onSortChanged={handleSort}
          emptyState={emptyState}
          loading={loading}
        >
          {data.map((dt: any, index: number) => {
            return (
              <DataTable.Row key={index}>
                <DataTable.Cell>{dt.label}</DataTable.Cell>
                <DataTable.Cell>{dt.variant}</DataTable.Cell>
                <DataTable.Cell>{dt.skuNumber}</DataTable.Cell>
                <DataTable.Cell align="right">{dt.unitSold}</DataTable.Cell>
                <DataTable.Cell align="right">{dt.totalPrice}</DataTable.Cell>
                <DataTable.Cell align="center">
                  <ButtonGroup>
                    <Button>Move</Button> <PrimaryButton>Update</PrimaryButton>
                  </ButtonGroup>
                </DataTable.Cell>
              </DataTable.Row>
            );
          })}
          {!loading && (
            <DataTable.Footer>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Typography as="div" variant="body1" color={Neutral.B40}>
                  Showing 5 of 100
                </Typography>
                <Pagination totalItems={100} pageSize={5} />
              </div>
            </DataTable.Footer>
          )}
        </DataTable>
      );
      `,
    },
    language: 'javascript',
    type: 'auto',
  },
};

const WithEmptyStateTemplate: Story<DataTableProps> = ({
  loading,
  ...args
}: DataTableProps) => {
  const headings: TableHeading[] = [
    { title: 'Label' },
    { title: 'Variant' },
    { title: 'SKU Number' },
    {
      id: 'unit-sold',
      title: 'Unit sold',
      defaultSortDirection: 'ASCENDING',
      align: 'right',
    },
    {
      title: 'Total Price',
      align: 'right',
    },
    {
      title: 'Actions',
      align: 'center',
    },
  ];

  const data: any[] = [];

  const emptyState = (
    <EmptyState
      title="No result"
      primaryButtonAction={{ label: 'Back to Dashboard' }}
      imageName="empty-carton"
    />
  );

  return (
    <DataTable
      {...args}
      headings={headings}
      emptyState={emptyState}
      loading={loading}
    >
      {data.map((dt: any, index: number) => {
        return (
          <DataTable.Row key={index}>
            <DataTable.Cell>{dt.label}</DataTable.Cell>
            <DataTable.Cell>{dt.variant}</DataTable.Cell>
            <DataTable.Cell>{dt.skuNumber}</DataTable.Cell>
            <DataTable.Cell align="right">{dt.unitSold}</DataTable.Cell>
            <DataTable.Cell align="right">{dt.totalPrice}</DataTable.Cell>
            <DataTable.Cell align="center">
              <ButtonGroup>
                <Button>Move</Button> <PrimaryButton>Update</PrimaryButton>
              </ButtonGroup>
            </DataTable.Cell>
          </DataTable.Row>
        );
      })}
      {!loading && data.length > 0 && (
        <DataTable.Footer>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography as="div" variant="body1" color={Neutral.B40}>
              Showing 5 of 100
            </Typography>
            <Pagination totalItems={100} pageSize={5} />
          </div>
        </DataTable.Footer>
      )}
    </DataTable>
  );
};

export const WithEmptyState = WithEmptyStateTemplate.bind({});

WithEmptyState.args = { loadingLabel: 'Loading...' };
