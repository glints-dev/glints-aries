import React from 'react';
import { useComboBoxTextInput } from '../TextInput/TextInputContext';
import { ComboboxOptionListContext } from './OptionListContext';
import { OptionListContainer, StyledOptionList } from './OptionListStyle';

export interface OptionListProps {
  children: React.ReactNode;
  onSelect?(value: string): void;
}

export const OptionList = ({ children, onSelect }: OptionListProps) => {
  const textInputContext = useComboBoxTextInput();
  const { textInputWidth } = textInputContext;

  const onOptionSelect = (value: string) => {
    if (onSelect) onSelect(value);
  };

  const optionListContextValue = {
    onOptionSelect,
  };

  return (
    <OptionListContainer textInputWidth={textInputWidth}>
      <StyledOptionList>
        <ComboboxOptionListContext.Provider value={optionListContextValue}>
          {children}
        </ComboboxOptionListContext.Provider>
      </StyledOptionList>
    </OptionListContainer>
  );
};
