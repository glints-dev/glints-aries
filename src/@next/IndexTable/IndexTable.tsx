import React from 'react';
import {
  Cell,
  IndexTable as PolarisIndexTable,
  IndexTableProps as PolarisIndexTableProps,
  Row,
  useIndexResourceState,
} from 'polaris-glints';
import { Checkbox } from '../Checkbox';
import { CheckboxProps } from '../Checkbox';

interface IndexTableProps extends PolarisIndexTableProps {}
const IndexTable = ({ children, ...props }: IndexTableProps) => {
  const renderCheckbox = ({ onChange, checked, ...props }: CheckboxProps) => (
    <Checkbox onChange={onChange} checked={checked} {...props} />
  );
  return (
    <PolarisIndexTable checkbox={renderCheckbox} {...props}>
      {children}
    </PolarisIndexTable>
  );
};

IndexTable.Cell = Cell;
IndexTable.Row = Row;
export { IndexTable, IndexTableProps, useIndexResourceState };
