import React from 'react';
import { ComboboxOptionListContext } from './OptionListContext';
import { StyledOptionList } from './OptionListStyle';

export interface OptionListProps {
  children: React.ReactNode;
  onSelect?(value: string): void;
}

export const OptionList = ({ children, onSelect }: OptionListProps) => {
  const onOptionSelect = (value: string) => {
    if (onSelect) onSelect(value);
  };

  const optionListContextValue = {
    onOptionSelect,
  };

  return (
    <StyledOptionList>
      <ComboboxOptionListContext.Provider value={optionListContextValue}>
        {children}
      </ComboboxOptionListContext.Provider>
    </StyledOptionList>
  );
};
