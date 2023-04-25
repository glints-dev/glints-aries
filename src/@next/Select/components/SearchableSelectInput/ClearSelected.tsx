import React, { forwardRef, useEffect, useState } from 'react';
import { Icon } from '../../../Icon';
import { ClearSelectedContainer } from './SearchableSelectInputStyle';

export interface ClearSelectedProps {
  canClear?: boolean;
  onSelect?({ value }: { value: string }): void;
  handleClearIconClick?: () => void;
  updateInputValue?(newValue: string): void;
}

export const ClearSelected = forwardRef<HTMLDivElement, ClearSelectedProps>(
  function ClearSelected(
    {
      canClear,
      onSelect,
      handleClearIconClick,
      updateInputValue,
    }: ClearSelectedProps,
    ref
  ) {
    const [showClear, setShowClear] = useState(canClear);

    const onClearIconClick = () => {
      updateInputValue('');
      onSelect({ value: '' });
      setShowClear(false);
      handleClearIconClick();
    };

    useEffect(() => {
      setShowClear(canClear);
    }, [canClear]);

    return (
      <>
        {showClear && (
          <ClearSelectedContainer ref={ref}>
            <Icon
              name="ri-close-circle-fill"
              style={{ cursor: 'pointer' }}
              onClick={onClearIconClick}
            />
          </ClearSelectedContainer>
        )}
      </>
    );
  }
);
