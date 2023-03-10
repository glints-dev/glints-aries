import React from 'react';
import { useComboboxTextInput } from '../TextInput/TextInputContext';
import { NoOptionList, NoOptionListProps } from './Option';
import { ComboboxOptionListContext } from './OptionListContext';
import { OptionListContainer, StyledOptionList } from './OptionListStyle';

export interface OptionListProps extends NoOptionListProps {
  children: React.ReactNode;
  isEmpty?: boolean;
  onSelect?(value: string): void;
}

export const OptionList = ({
  children,
  isEmpty,
  noOptionsMessage,
  onSelect,
}: OptionListProps) => {
  const textInputContext = useComboboxTextInput();
  const { textInputWidth } = textInputContext;
  const hasChildren = !isEmpty;

  const onOptionSelect = ({ value }: { value: string }) => {
    if (onSelect) onSelect(value);
  };

  const optionListContextValue = {
    onOptionSelect,
  };

  return (
    <OptionListContainer textInputWidth={textInputWidth}>
      <StyledOptionList>
        <ComboboxOptionListContext.Provider value={optionListContextValue}>
          {hasChildren ? (
            children
          ) : (
            <NoOptionList noOptionsMessage={noOptionsMessage} />
          )}
        </ComboboxOptionListContext.Provider>
      </StyledOptionList>
    </OptionListContainer>
  );
};
