import React from 'react';
import {
  Cell,
  IndexTable as PolarisIndexTable,
  IndexTableProps,
} from 'polaris-glints';
import { Checkbox } from '../Checkbox';
import { CheckboxProps } from '../Checkbox';
import { Row } from './components/Row/Row';
import { StyledIndexTable } from './IndexTableStyle';
import { LoadingState } from './components/LoadingState';

export interface CustomIndexTableProps
  extends Omit<IndexTableProps, 'emptySearchTitle'> {
  emptySearchTitle?: string;
}

const IndexTable = ({
  bulkActions,
  children,
  itemCount,
  selectedItemsCount,
  loading,
  emptyState,
  emptySearchTitle,
  ...props
}: CustomIndexTableProps) => {
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

  return (
    <>
      <StyledIndexTable />
      <PolarisIndexTable
        bulkActions={bulkActions}
        checkbox={renderCheckboxHeader}
        itemCount={loading ? 0 : itemCount}
        selectedItemsCount={selectedItemsCount}
        emptySearchTitle={emptySearchTitle ?? ''}
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
