import { IndexTableRowContext } from 'polaris-glints';
import React, { memo, useContext, useRef } from 'react';
import { Checkbox as GlintsCheckbox } from '../../../Checkbox';
import { CheckboxCellContentContainer, CheckboxWrapper } from './CheckboxStyle';

const Checkbox = () => {
  const checkboxRef = useRef(null);

  const { itemId, selected, disabled, onInteraction } =
    useContext(IndexTableRowContext);

  return (
    <CheckboxWrapper>
      <CheckboxCellContentContainer>
        <div onClick={onInteraction}>
          <GlintsCheckbox
            ref={checkboxRef}
            id={itemId}
            checked={selected}
            disabled={disabled}
            isPadded={false}
            inTable
          />
        </div>
      </CheckboxCellContentContainer>
    </CheckboxWrapper>
  );
};

export const MemoizedCheckbox = memo(Checkbox);
