import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { ArrowDownIcon, ArrowUpIcon } from '../..';
import { useOutsideAlerter } from '../../Utils/useOutsideAlerter';
import * as S from './PhoneNumberInputStyles';

export const PhoneNumberInput = ({
  value,
  onChange,
  callingCodeOptions,
  onInputChange,
  filterValue,
  label,
  callingCodePlaceholder,
  callingCodeFilterInputPlaceholder,
}: Props) => {
  const [isCallingCodeInputOpen, setIsCallingCodeInputOpen] = useState(true);
  const toggleIsCallingCodeOpen = () =>
    setIsCallingCodeInputOpen(!isCallingCodeInputOpen);
  const closeCallingCodeInput = () => setIsCallingCodeInputOpen(false);

  const callingCodeFilterInputRef = useRef<HTMLInputElement>();
  useEffect(
    function focusCallingCodeFilterInputOnOpen() {
      if (isCallingCodeInputOpen) {
        callingCodeFilterInputRef.current.focus();
      }
    },
    [isCallingCodeInputOpen]
  );

  const containerRef = useRef<HTMLDivElement>();
  useOutsideAlerter(containerRef, closeCallingCodeInput);

  return (
    <S.PhoneNumberInputContainer ref={containerRef}>
      <S.TopRow>
        <S.CallingCodeInputToggle onClick={toggleIsCallingCodeOpen}>
          +{value.callingCode || callingCodePlaceholder}
          <S.CallingCodeInputOpenIndicator>
            {isCallingCodeInputOpen ? <ArrowDownIcon /> : <ArrowUpIcon />}
          </S.CallingCodeInputOpenIndicator>
        </S.CallingCodeInputToggle>
        <S.SignificantNumberInput
          value={value.significantNumber || ''}
          onChange={e =>
            onChange({
              ...value,
              significantNumber: e.target.value,
            })
          }
          placeholder={label}
        />
      </S.TopRow>
      <S.CallingCodeInput isOpen={isCallingCodeInputOpen}>
        <S.CallingCodeFilterInput
          value={filterValue}
          onChange={e => onInputChange(e.target.value)}
          placeholder={callingCodeFilterInputPlaceholder}
          ref={callingCodeFilterInputRef}
        />
        <S.CallingCodeOptionsList>
          {callingCodeOptions.map(({ callingCode, label }) => (
            <S.CallingCodeOption
              key={callingCode}
              onClick={() => {
                onChange({
                  ...value,
                  callingCode: callingCode,
                });
                closeCallingCodeInput();
              }}
            >
              <S.CallingCodeOptionCallingCode>
                +{callingCode}
              </S.CallingCodeOptionCallingCode>
              <S.CallingCodeOptionLabel>{label}</S.CallingCodeOptionLabel>
            </S.CallingCodeOption>
          ))}
        </S.CallingCodeOptionsList>
      </S.CallingCodeInput>
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
  callingCode: number | null;
  significantNumber: string | null;
}

export interface CallingCodeOption {
  label: string;
  callingCode: number;
  isFeatured: boolean;
}
