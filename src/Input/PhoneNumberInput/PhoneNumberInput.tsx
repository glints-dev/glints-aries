import { useCombobox } from 'downshift';
import { find, orderBy } from 'lodash';
import React, { Fragment, ReactNode, useEffect, useRef, useState } from 'react';
import { useId } from 'react-id-generator';
import { ArrowDownIcon, ArrowUpIcon } from '../..';
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
  callingCodeOptions: callingCodeOptionsExternal,
  onInputChange,
  filterValue,
  isLoadingCallingCodeOptions,
  label,
  featuredOptionsLabel,
  otherOptionsLabel,
  callingCodePlaceholder,
  callingCodeFilterInputPlaceholder,
  callingCodeNoOptionsLabel,
  error,
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
    onSelectedItemChange: ({ selectedItem: { callingCode } }) => {
      onChange({ ...value, callingCode });
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
    <S.PhoneNumberInputContainer ref={containerRef}>
      <S.TopRow data-invalid={Boolean(error)}>
        <S.CallingCodeInputToggle
          onClick={toggleIsCallingCodeOpen}
          data-testid="calling-code-input-toggle"
        >
          +{value.callingCode || callingCodePlaceholder}
          <S.CallingCodeInputOpenIndicator {...getToggleButtonProps()}>
            {isCallingCodeInputOpen ? <ArrowDownIcon /> : <ArrowUpIcon />}
          </S.CallingCodeInputOpenIndicator>
        </S.CallingCodeInputToggle>
        <S.SignificantNumberInput
          id={significantNumberInputId}
          data-testid="significant-number-input"
          value={value.significantNumber || ''}
          onChange={e =>
            onChange({
              ...value,
              significantNumber: e.target.value,
            })
          }
          placeholder={label}
          data-invalid={Boolean(error)}
          aria-label={label}
        />
        <S.Label htmlFor={significantNumberInputId}>{label}</S.Label>
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
          />
          {isLoadingCallingCodeOptions && (
            <S.CallingCodeInputLoading data-testid="calling-code-options-loading" />
          )}
        </S.CallingCodeFilterInputGroup>
        <S.CallingCodeOptionsList {...getMenuProps()}>
          {callingCodeOptions.length > 0 ? (
            callingCodeOptions.map((item, index) => (
              <Fragment key={item.callingCode}>
                {item.isFeatured !==
                  (callingCodeOptions[index - 1] || {}).isFeatured && (
                  <S.GroupHeader>
                    {item.isFeatured ? featuredOptionsLabel : otherOptionsLabel}
                  </S.GroupHeader>
                )}
                <S.CallingCodeOption
                  {...getItemProps({
                    item,
                    index,
                  })}
                  title={item.label}
                >
                  <S.CallingCodeOptionCallingCode>
                    +{item.callingCode}
                  </S.CallingCodeOptionCallingCode>
                  <S.CallingCodeOptionLabel>
                    {item.label}
                  </S.CallingCodeOptionLabel>
                </S.CallingCodeOption>
              </Fragment>
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
  error?: ReactNode;
  callingCodeOptions: CallingCodeOption[];
  filterValue?: string | null;
  onInputChange?: (inputValue: string | null) => void;
  isLoadingCallingCodeOptions?: boolean;
  callingCodeInputRootId?: string;
  label: string;
  featuredOptionsLabel: string;
  otherOptionsLabel: string;
  callingCodePlaceholder: string;
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
