import React from 'react';
import {
  Cell,
  // IndexTable,
  IndexTable as PolarisIndexTable,
  IndexTableProps as PolarisIndexTableProps,
  IndexTableSelectionType,
  Row,
  useIndexResourceState,
  useIndexTableIndexSelectionChange,
} from 'polaris-glints';
// import { Checkbox } from './components/Checkbox/Checkbox';
// "@shopify/polaris"

interface IndexTableProps extends PolarisIndexTableProps {}
const IndexTable = ({ children, ...props }: IndexTableProps) => {
  const handleSelectionChange = useIndexTableIndexSelectionChange();

  const handleSelectPage = (checked: boolean) => {
    handleSelectionChange(IndexTableSelectionType.Page, checked); // SelectionType
  };

  return (
    <PolarisIndexTable checkbox={<Checkbox />} {...props}>
      {children}
    </PolarisIndexTable>
  );
};

IndexTable.Cell = Cell;
IndexTable.Row = Row;
export { IndexTable, IndexTableProps, useIndexResourceState };
