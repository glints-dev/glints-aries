import React, {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
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
  filterOptions?: (str: string) => Option[];
  onSelect?({ value }: { value: string }): void;
  selectedValue?: string;
  hasSelectedValues?: boolean;
};

export const SearchableSelectInput = forwardRef<
  HTMLInputElement,
  SearchableSelectInputProps
>(function SearchableSelectInput(
  {
    disabled = false,
    error,
    filterOptions,
    onFocus,
    onSelect,
    placeholder,
    prefix,
    selectedValue,
    width,
    hasSelectedValues,
    ...props
  }: SearchableSelectInputProps,
  ref
) {
  const [showClear, setShowClear] = useState(false);
  const [hasSuffix, setHasSuffix] = useState(false);
  const [prefixWidth, setPrefixWidth] = React.useState(0);
  const [suffixWidth, setSuffixWidth] = useState(0);
  const activatorContext = useActivatorTextInput();
  const optionListContext = useOptionList();
  const {
    inputValue,
    updateInputValue,
    searchableSelectState: { showInput, showPlaceholder, showSelected },
    updateSearchableSelectState,
  } = activatorContext;
  const { options, updateMenuOptions } = optionListContext;

  const hasPrefix = !!prefix;

  const prefixRef = useRef(null);
  const suffixRef = useRef(null);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setShowClear(false);

    onFocus(e);
  };

  const handleClearIconClick = () => {
    setShowClear(false);
    updateSearchableSelectState({
      showSelected: false,
      showPlaceholder: true,
      showInput: true,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const str = e.currentTarget.value;
    updateInputValue(str);

    const filteredOptions = filterOptions(str);
    updateMenuOptions(filteredOptions);

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
    updateMenuOptions(options);
    setHasSuffix(true);
  };

  const handleInputBlur = () => {
    setShowClear(true);
    setHasSuffix(true);

    if (selectedValue) {
      // allow onClick event handler in Menu before onBlur of input
      setTimeout(() => {
        updateSearchableSelectState({
          showSelected: true,
          showInput: false,
          showPlaceholder: false,
        });
      }, 100);
    }
  };

  useEffect(() => {
    if (hasSelectedValues) {
      setShowClear(true);
      return;
    }

    setShowClear(false);
  }, [hasSelectedValues]);

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
            onBlur={handleInputBlur}
            onFocus={handleFocus}
            {...props}
          />
        </InputContainer>
      )}
      {showClear && (
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
