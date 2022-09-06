import * as React from 'react';
import { SelectItemProps } from './SelectList';
import { SelectInput } from './SelectStyle';
declare const Select: React.FC<Props> & {
    Option: React.FC<SelectItemProps>;
};
export interface SelectInputProps {
    /** Disable typing on Select input, so the option can't be searched. */
    disableTyping?: boolean;
    /** Sets Select to be smaller. */
    small?: boolean;
    /** Deprecated! */
    status?: string;
}
export declare type Props = React.ComponentPropsWithoutRef<typeof SelectInput> & SelectInputProps & {
    children: React.ReactNode;
    /** Sets value for Input. */
    value?: string;
    /** Sets default value for Input. */
    defaultValue?: string;
    /** Disable the Text Field. */
    disabled?: boolean;
    /** To disable browser auto complete, pass "nope" or anything other than "off". */
    autoComplete?: string;
    /** Shows loading spinner in menu. */
    isLoading?: boolean;
    /** Sets placeholder value for the Text Field. */
    label?: string;
    /** Sets message to display when no option matches, set it to null when the message is not needed. */
    noOptionResult?: string;
    /** Removes drop icon. */
    removeDropIcon?: boolean;
    /** Removes floating effect for placeholder. */
    removeFloatingLabel?: boolean;
    /** Pass true to display error state without error message */
    error?: React.ReactNode | string | boolean;
    /** Deprecated! */
    renderError?: (error: React.ReactNode | string | boolean) => React.ReactNode;
    /** Sets initial open state of Select. */
    defaultOpen?: boolean;
    /** A custom function to filter options by when typing into Select. By default, it filters options by input with case insensitive. However, if the input value is case sensitive same as one of options, then filterFunction will be ignored.  */
    filterFunction?: (option: string, search: string) => boolean;
    onFocus?(e: React.FocusEvent<HTMLInputElement>): void;
    onBlur?(e: React.FocusEvent<HTMLInputElement>): void;
    /** Called when select an option or value of input is changed. WARNING: firing on value of input is changed will be deprecated, please use onInputChange instead */
    onChange?(value: string): void;
    /** Called when value of input is changed. */
    onInputChange?(event: React.ChangeEvent<HTMLInputElement>): void;
};
export declare const Option: React.FC<SelectItemProps>;
export default Select;
