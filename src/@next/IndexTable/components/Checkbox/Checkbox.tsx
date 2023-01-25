import {
  IndexTableRowContext,
  // IndexTableSelectionType,
  // useIndexSelectionChange,
} from 'polaris-glints';
import React, { memo, useContext } from 'react';
import { Checkbox as GlintsCheckbox } from '../../../Checkbox';
import { CheckboxCellContentContainer, CheckboxWrapper } from './CheckboxStyle';

export const Checkbox = () => {
  const { itemId, selected, disabled, onInteraction } =
    useContext(IndexTableRowContext);
  // const handleSelectionChange = useIndexSelectionChange();

  console.log('itemId', itemId, 'selected', selected);
  // const handleSelectPage = (checked: boolean) => {
  //   // console.log(
  //   //   'checked',
  //   //   IndexTableSelectionType,
  //   //   checked,
  //   //   handleSelectionChange
  //   // );
  //   handleSelectionChange(IndexTableSelectionType.Page, checked); // SelectionType
  // };

  return (
    <CheckboxWrapper>
      <CheckboxCellContentContainer>
        <div onClick={onInteraction}>
          <GlintsCheckbox
            id={itemId}
            checked={selected}
            disabled={disabled}
            // onChange={handleSelectPage}
          />
        </div>
      </CheckboxCellContentContainer>
    </CheckboxWrapper>
  );
};

export const MemoizedCheckbox = memo(Checkbox);
