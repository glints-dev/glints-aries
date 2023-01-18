import {
  IndexTableRowContext,
  IndexTableSelectionType,
  useIndexTableIndexSelectionChange,
} from 'polaris-glints';
import React, { useContext } from 'react';
import { Checkbox as GlintsCheckbox } from '../../../Checkbox';
import { CheckboxCellContentContainer, CheckboxWrapper } from './CheckboxStyle';

export const Checkbox = () => {
  const { itemId, selected, disabled, onInteraction } =
    useContext(IndexTableRowContext);
  const handleSelectionChange = useIndexTableIndexSelectionChange();

  const handleSelectPage = (checked: boolean) => {
    handleSelectionChange(IndexTableSelectionType.Page, checked); // SelectionType
  };

  return (
    <CheckboxWrapper onClick={onInteraction}>
      <CheckboxCellContentContainer>
        <div onClick={onInteraction}>
          <GlintsCheckbox
            id={itemId}
            checked={selected}
            disabled={disabled}
            onChange={handleSelectPage}
          />
        </div>
      </CheckboxCellContentContainer>
    </CheckboxWrapper>
  );
};
