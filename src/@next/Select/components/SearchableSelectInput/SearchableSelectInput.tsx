import React, { forwardRef, useLayoutEffect, useRef, useState } from 'react';
import { InputProps } from '../../../Input/Input';
import { StyledInput, StyledPrefixContainer } from '../../../Input/InputStyle';
import { Option } from '../../../Menu';
import { useActivatorTextInput } from '../Activator/ActivatorContext';
import { useOptionList } from '../OptionList/OptionListContext';
import { ClearSelected } from './ClearSelected';
import {
  InputContainer,
  StyledContainer,
  StyledSelectedValue,
} from './SearchableSelectInputStyle';

export type SearchableSelectInputProps = Omit<
  InputProps,
  'type' | 'onChange' | 'onSelect'
> & {
  canClear?: boolean;
  onSelect?({ value }: { value: string }): void;
  selectedValue?: string;
  updateInputValue?(newValue: string): void;
};

export const SearchableSelectInput = forwardRef<
  HTMLInputElement,
  SearchableSelectInputProps
>(function SearchableSelectInput(
  {
    canClear = false,
    disabled = false,
    error,
    onSelect,
    placeholder,
    prefix,
    selectedValue,
    value: inputValue,
    width,
    updateInputValue,
    ...props
  }: SearchableSelectInputProps,
  ref
) {
  const [hasSuffix, setHasSuffix] = useState(false);
  const [prefixWidth, setPrefixWidth] = React.useState(0);
  const [suffixWidth, setSuffixWidth] = useState(0);
  const activatorContext = useActivatorTextInput();
  const optionListContext = useOptionList();
  const {
    searchableSelectState: { showInput, showPlaceholder, showSelected },
    updateSearchableSelectState,
  } = activatorContext;
  const { options, updateMenuOptions } = optionListContext;

  const hasPrefix = !!prefix;

  const prefixRef = useRef(null);
  const suffixRef = useRef(null);

  const handleClearIconClick = () => {
    setHasSuffix(false);
    updateSearchableSelectState({
      showSelected: false,
      showPlaceholder: true,
      showInput: true,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    updateInputValue(value);

    if (value === '') {
      updateMenuOptions(options);
      return;
    }

    const filterRegex = new RegExp(value, 'i');
    const filterOptions = options.filter((option: Option) =>
      (option.label as string).match(filterRegex)
    );
    updateMenuOptions(filterOptions);

    updateSearchableSelectState({
      showSelected: false,
      showInput: true,
      showPlaceholder: false,
    });
  };

  const handleSelectedClick = () => {
    updateSearchableSelectState({
      showSelected: true,
      showInput: true,
      showPlaceholder: false,
    });

    updateInputValue('');
    setHasSuffix(true);
  };

  useLayoutEffect(() => {
    if (hasPrefix) {
      const prefixWidth = prefixRef.current.getBoundingClientRect().width;
      setPrefixWidth(prefixWidth);
    }
  }, [hasPrefix, prefix]);

  useLayoutEffect(() => {
    if (hasSuffix) {
      const suffixWidth = suffixRef.current.getBoundingClientRect().width;
      setSuffixWidth(suffixWidth);
    }
  }, [hasSuffix]);

  return (
    <StyledContainer
      ref={ref}
      data-prefix={hasPrefix}
      data-suffix={hasSuffix}
      data-error={error}
      data-disabled={disabled}
      prefixWidth={prefixWidth}
      suffixWidth={suffixWidth}
      width={width}
    >
      {hasPrefix && (
        <StyledPrefixContainer ref={prefixRef}>{prefix}</StyledPrefixContainer>
      )}
      {showSelected && (
        <StyledSelectedValue
          className="searchable-select"
          onClick={handleSelectedClick}
        >
          {selectedValue}
        </StyledSelectedValue>
      )}
      {showInput && (
        <InputContainer>
          <StyledInput
            onChange={handleInputChange}
            placeholder={showPlaceholder ? placeholder : null}
            value={inputValue}
            {...props}
          />
        </InputContainer>
      )}
      {canClear && (
        <ClearSelected
          ref={suffixRef}
          onSelect={onSelect}
          handleClearIconClick={handleClearIconClick}
          updateInputValue={updateInputValue}
        />
      )}
    </StyledContainer>
  );
});
