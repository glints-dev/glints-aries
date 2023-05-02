import React, { forwardRef } from 'react';
import { Icon } from '../../../Icon';
import { ClearSelectedContainer } from './SearchableSelectInputStyle';

export interface ClearSelectedProps {
  onSelect?({ value }: { value: string }): void;
  handleClearIconClick?: () => void;
  updateInputValue?(newValue: string): void;
}

export const ClearSelected = forwardRef<HTMLDivElement, ClearSelectedProps>(
  function ClearSelected(
    { onSelect, handleClearIconClick, updateInputValue }: ClearSelectedProps,
    ref
  ) {
    const onClearIconClick = () => {
      updateInputValue('');
      onSelect({ value: '' });
      handleClearIconClick();
    };

    return (
      <ClearSelectedContainer ref={ref} className="clear-button">
        <Icon
          name="ri-close-circle-fill"
          style={{ cursor: 'pointer' }}
          onClick={onClearIconClick}
        />
      </ClearSelectedContainer>
    );
  }
);
