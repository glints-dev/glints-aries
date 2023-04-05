import { useCombobox } from 'downshift';
import { find, orderBy } from 'lodash-es';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { useId } from 'react-id-generator';

import { ArrowDownIcon, ArrowUpIcon } from '../../General/Icon/components';
import { Flex } from '../../Layout/Flex';
import { useOutsideAlerter } from '../../Utils/useOutsideAlerter';
import * as S from './PhoneNumberInputStyles';

// Downshift wants a ref to this, but we need one ourselves, and there is no way
// to share.
// https://github.com/downshift-js/downshift/issues/604
// https://github.com/downshift-js/downshift/issues/1167
const refErrorFix = { suppressRefError: true };

export const PhoneNumberInput = ({
  value,
  onChange,
  onFocus,
  onBlur,
  callingCodeOptions: callingCodeOptionsExternal,
  onInputChange,
  filterValue,
  isLoadingCallingCodeOptions,
  label,
  featuredOptionsLabel,
  otherOptionsLabel,
  callingCodeFilterInputPlaceholder,
  callingCodeNoOptionsLabel,
  error,
  addon,
  ...restProps
}: Props) => {
  const [isCallingCodeInputOpen, setIsCallingCodeInputOpen] = useState(false);
  const toggleIsCallingCodeOpen = () =>
    setIsCallingCodeInputOpen(!isCallingCodeInputOpen);
  const closeCallingCodeInput = () => setIsCallingCodeInputOpen(false);

  const callingCodeOptions = orderBy(
    callingCodeOptionsExternal,
    ['isFeatured', 'label'],
    ['desc', 'asc']
  );

  const {
    getComboboxProps,
    getInputProps,
    getToggleButtonProps,
    getMenuProps,
    getItemProps,
  } = useCombobox<CallingCodeOption>({
    items: callingCodeOptions,
    selectedItem: find(callingCodeOptions, { callingCode: value.callingCode }),
    onSelectedItemChange: ({ selectedItem }) => {
      onChange({
        ...value,
        callingCode: selectedItem
          ? selectedItem.callingCode
          : value.callingCode,
      });
      closeCallingCodeInput();
    },
    inputValue: filterValue,
    onInputValueChange: ({ type, inputValue }) => {
      if (type !== useCombobox.stateChangeTypes.InputChange) return;
      onInputChange(inputValue);
    },
    itemToString: option => (option ? option.label : ''),
  });

  const callingCodeFilterInputRef = useRef<HTMLInputElement>();
  useEffect(
    function focusCallingCodeFilterInputOnOpen() {
      if (isCallingCodeInputOpen && callingCodeFilterInputRef.current) {
        callingCodeFilterInputRef.current.focus();
      }
    },
    [isCallingCodeInputOpen]
  );

  const containerRef = useRef<HTMLDivElement>();
  useOutsideAlerter(containerRef, closeCallingCodeInput);

  const [significantNumberInputId] = useId(1, 'significant-number-input-');

  return (
    <S.PhoneNumberInputContainer ref={containerRef} {...restProps}>
      <S.TopRow data-invalid={Boolean(error)}>
        <S.CallingCodeInputToggle
          {...getToggleButtonProps()}
          type="button"
          onClick={toggleIsCallingCodeOpen}
          data-testid="calling-code-input-toggle"
        >
          +{value.callingCode}
          <S.CallingCodeInputOpenIndicator>
            {isCallingCodeInputOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </S.CallingCodeInputOpenIndicator>
        </S.CallingCodeInputToggle>
        <S.SignificantNumberInput
          id={significantNumberInputId}
          data-testid="significant-number-input"
          type="tel"
          value={value.significantNumber || ''}
          onChange={e =>
            onChange({
              ...value,
              significantNumber: e.target.value,
            })
          }
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={label}
          data-invalid={Boolean(error)}
          aria-label={label}
        />
        <S.Label htmlFor={significantNumberInputId}>{label}</S.Label>
        <S.TopRowAddon data-testid="addon">{addon}</S.TopRowAddon>
      </S.TopRow>
      <S.CallingCodeInput
        isOpen={isCallingCodeInputOpen}
        {...getComboboxProps()}
        data-testid="calling-code-input"
      >
        <S.CallingCodeFilterInputGroup>
          <S.CallingCodeFilterInput
            {...getInputProps(
              {
                placeholder: callingCodeFilterInputPlaceholder,
              },
              { ...refErrorFix }
            )}
            ref={callingCodeFilterInputRef}
            data-testid="calling-code-filter-input"
            onFocus={onFocus}
            onBlur={onBlur}
          />
          {isLoadingCallingCodeOptions && (
            <S.CallingCodeInputLoading data-testid="calling-code-options-loading" />
          )}
        </S.CallingCodeFilterInputGroup>
        <S.CallingCodeOptionsList {...getMenuProps()}>
          {callingCodeOptions.length > 0 ? (
            callingCodeOptions.map((item, index) => (
              <S.CallingCodeOption
                key={`${item.callingCode}-${item.label}`}
                {...getItemProps({
                  item,
                  index,
                })}
                title={item.label}
                withGroupHeader={
                  item.isFeatured !==
                    (callingCodeOptions[index - 1] || {}).isFeatured &&
                  (item.isFeatured ? featuredOptionsLabel : otherOptionsLabel)
                }
              >
                <Flex>
                  <S.CallingCodeOptionCallingCode>
                    +{item.callingCode}
                  </S.CallingCodeOptionCallingCode>
                  <S.CallingCodeOptionLabel>
                    {item.label}
                  </S.CallingCodeOptionLabel>
                </Flex>
              </S.CallingCodeOption>
            ))
          ) : (
            <S.NoOptions data-testid="no-options">
              {callingCodeNoOptionsLabel}
            </S.NoOptions>
          )}
        </S.CallingCodeOptionsList>
      </S.CallingCodeInput>
      <S.Error data-testid="error">{error || null}</S.Error>
    </S.PhoneNumberInputContainer>
  );
};

export interface Props {
  value: PhoneNumber;
  onChange: (value: PhoneNumber) => void;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  error?: ReactNode;
  addon?: ReactNode;
  callingCodeOptions: CallingCodeOption[];
  filterValue?: string | null;
  onInputChange?: (inputValue: string | null) => void;
  isLoadingCallingCodeOptions?: boolean;
  callingCodeInputRootId?: string;
  label: string;
  featuredOptionsLabel: string;
  otherOptionsLabel: string;
  callingCodeFilterInputPlaceholder: string;
  callingCodeNoOptionsLabel: string;
}

export interface PhoneNumber {
  callingCode: number;
  significantNumber: string | null;
}

export interface CallingCodeOption {
  label: string;
  callingCode: number;
  isFeatured: boolean;
}
