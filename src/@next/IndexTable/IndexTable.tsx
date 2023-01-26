import React, { useCallback, useEffect, useState } from 'react';
import {
  Cell,
  IndexTable as PolarisIndexTable,
  IndexTableProps as PolarisIndexTableProps,
} from 'polaris-glints';
import { Checkbox } from '../Checkbox';
import { CheckboxProps } from '../Checkbox';
import { BulkActions } from './components/BulkActions/BulkActions';
import { Button } from '../Button';
import { Row } from './components/Row/Row';

interface IndexTableProps extends PolarisIndexTableProps {}
const IndexTable = ({
  bulkActions,
  children,
  itemCount,
  selectedItemsCount,
  ...props
}: IndexTableProps) => {
  const [showBulkActions, setShowBulkActions] = useState(false);

  const renderCheckboxHeader = ({
    checked,
    onChange,
    ...props
  }: CheckboxProps) => {
    return <Checkbox onChange={onChange} checked={checked} {...props} />;
  };

  const toggleBulkActions = useCallback(
    () => setShowBulkActions(showBulkActions => !showBulkActions),
    []
  );

  const bulkActionsActivator = (
    <Button onClick={toggleBulkActions}>Show</Button>
  );

  const renderBulkActions = ({ actions }) => (
    <BulkActions
      bulkActions={actions}
      active={showBulkActions}
      activator={bulkActionsActivator}
    />
  );

  useEffect(() => {
    if (selectedItemsCount > itemCount) {
      setShowBulkActions(true);
    }

    setShowBulkActions(false);
  }, [itemCount, selectedItemsCount]);
  return (
    <PolarisIndexTable
      bulkActions={bulkActions}
      checkbox={renderCheckboxHeader}
      itemCount={itemCount}
      selectedItemsCount={selectedItemsCount}
      renderBulkActions={renderBulkActions}
      {...props}
    >
      {children}
    </PolarisIndexTable>
  );
};

IndexTable.Cell = Cell;
IndexTable.Row = Row;
export { useIndexResourceState } from 'polaris-glints';
export { IndexTable, IndexTableProps };
