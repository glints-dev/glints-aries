import { sample } from 'lodash';
import React, { ReactNode } from 'react';

export const PhoneNumberInput = ({
  value,
  onChange,
  callingCodeOptions,
  onInputChange,
  filterValue,
}: Props) => {
  return (
    <div>
      <input
        value={filterValue}
        onChange={e =>
          onInputChange(e.target.value.trim().toLowerCase() || null)
        }
      />
      <button
        onClick={() =>
          onChange({
            callingCode: sample(callingCodeOptions).callingCode,
            significantNumber: '12345678',
          })
        }
      >
        Current Value: <code>{JSON.stringify(value)}</code>
      </button>
      <pre>
        <code>{JSON.stringify(callingCodeOptions)}</code>
      </pre>
    </div>
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
  callingCodeInputPlaceholder: string;
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
