import React from 'react';
import { useSelectActivator } from '../Activator/ActivatorContext';
import { ActivatorTextInputProps } from '../Activator/ActivatorTextInput';
import { NoOptionList, NoOptionListProps } from './Option';
import { SelectOptionListContext } from './OptionListContext';
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
  const textInputContext: ActivatorTextInputProps =
    useSelectActivator() as ActivatorTextInputProps;
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
        <SelectOptionListContext.Provider value={optionListContextValue}>
          {hasChildren ? (
            children
          ) : (
            <NoOptionList noOptionsMessage={noOptionsMessage} />
          )}
        </SelectOptionListContext.Provider>
      </StyledOptionList>
    </OptionListContainer>
  );
};
