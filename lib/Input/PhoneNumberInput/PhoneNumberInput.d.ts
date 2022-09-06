import React, { ReactNode } from 'react';
export declare const PhoneNumberInput: ({ value, onChange, onFocus, onBlur, callingCodeOptions: callingCodeOptionsExternal, onInputChange, filterValue, isLoadingCallingCodeOptions, label, featuredOptionsLabel, otherOptionsLabel, callingCodeFilterInputPlaceholder, callingCodeNoOptionsLabel, error, addon, ...restProps }: Props) => JSX.Element;
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
