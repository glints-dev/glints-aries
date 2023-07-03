import React from 'react';
import { Icon } from '../../../Icon';
import { ClearSelectedContainer } from './SearchableSelectInputStyle';

export interface ClearSelectedProps {
  onSelect?({ value }: { value: string }): void;
  handleClearIconClick?: () => void;
  updateInputValue?(newValue: string): void;
}

export const ClearSelected = ({
  onSelect,
  handleClearIconClick,
  updateInputValue,
}: ClearSelectedProps) => {
  const onClearIconClick = () => {
    updateInputValue('');
    onSelect({ value: '' });
    handleClearIconClick();
  };

  return (
    <ClearSelectedContainer>
      <Icon
        name="ri-close-circle-fill"
        style={{ cursor: 'pointer' }}
        onClick={onClearIconClick}
        className="clear-icon"
      />
    </ClearSelectedContainer>
  );
};
