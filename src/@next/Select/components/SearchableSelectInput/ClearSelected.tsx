import React from 'react';
import { Icon } from '../../../Icon';
import { ClearSelectedContainer } from './SearchableSelectInputStyle';

export interface ClearSelectedProps {
  onSelect?({ value }: { value: string }): void;
  handleClearIconClick?: () => void;
  updateInputValue?(newValue: string): void;
  height?: string;
}

export const ClearSelected = ({
  onSelect,
  handleClearIconClick,
  updateInputValue,
  height,
}: ClearSelectedProps) => {
  const onClearIconClick = () => {
    updateInputValue('');
    onSelect({ value: '' });
    handleClearIconClick();
  };

  return (
    <ClearSelectedContainer height={height}>
      <Icon
        name="ri-close-circle-fill"
        style={{ cursor: 'pointer' }}
        onClick={onClearIconClick}
        className="clear-icon"
      />
    </ClearSelectedContainer>
  );
};
