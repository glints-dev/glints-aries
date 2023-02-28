import React from 'react';
import {
  Cell,
  IndexTable as PolarisIndexTable,
  IndexTableProps as PolarisIndexTableProps,
} from 'polaris-glints';
import { Checkbox } from '../Checkbox';
import { CheckboxProps } from '../Checkbox';
import { Row } from './components/Row/Row';
import { StyledIndexTable } from './IndexTableStyle';
import { LoadingState } from './components/LoadingState';

type IndexTableProps = Omit<PolarisIndexTableProps, 'emptySearchTitle'>;

const IndexTable = ({
  bulkActions,
  children,
  itemCount,
  selectedItemsCount,
  loading,
  emptyState,
  ...props
}: IndexTableProps) => {
  const renderCheckboxHeader = ({
    checked,
    onChange,
    ...props
  }: CheckboxProps) => {
    return (
      <Checkbox
        onChange={onChange}
        checked={checked}
        isPadded={false}
        {...props}
      />
    );
  };

  const checkbox = !loading && itemCount > 0 ? renderCheckboxHeader : undefined;

  return (
    <>
      <StyledIndexTable />
      <PolarisIndexTable
        bulkActions={bulkActions}
        checkbox={checkbox}
        itemCount={loading ? 0 : itemCount}
        selectedItemsCount={selectedItemsCount}
        emptySearchTitle={null}
        loading={false}
        emptyState={
          loading ? (
            <LoadingState
              label={props.loadingLabel}
              colSpan={props.headings.length}
            />
          ) : (
            emptyState
          )
        }
        {...props}
      >
        {children}
      </PolarisIndexTable>
    </>
  );
};

IndexTable.Cell = Cell;
IndexTable.Row = Row;
export { useIndexResourceState } from 'polaris-glints';
export { IndexTable, IndexTableProps };
