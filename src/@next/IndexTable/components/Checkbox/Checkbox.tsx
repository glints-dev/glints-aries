import { IndexTableRowContext } from 'polaris-glints';
import React, { memo, useContext } from 'react';
import { Checkbox as GlintsCheckbox } from '../../../Checkbox';
import { CheckboxCellContentContainer, CheckboxWrapper } from './CheckboxStyle';

const Checkbox = () => {
  const { itemId, selected, disabled, onInteraction } =
    useContext(IndexTableRowContext);

  return (
    <CheckboxWrapper>
      <CheckboxCellContentContainer className="checkbox-wrapper">
        <div onClick={onInteraction}>
          <GlintsCheckbox
            id={itemId}
            checked={selected}
            disabled={disabled}
            isPadded={false}
          />
        </div>
      </CheckboxCellContentContainer>
    </CheckboxWrapper>
  );
};

export const MemoizedCheckbox = memo(Checkbox);
