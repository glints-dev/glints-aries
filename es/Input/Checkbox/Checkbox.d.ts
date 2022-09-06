import * as React from 'react';
export declare type CheckedState = 'false' | 'true' | 'mixed';
export declare const Checkbox: React.FunctionComponent<CheckboxProps>;
declare type HTMLInputProps = Omit<React.HTMLProps<HTMLInputElement>, 'size' | 'label'>;
export interface CheckboxProps extends HTMLInputProps {
    /** REQUIRED */
    id?: string;
    label?: React.ReactNode;
    size?: 'large' | 'small';
    border?: boolean;
    /** REQUIRED */
    value?: string;
    /** If given, the Checkbox will be treated as controlled. Use with onClick. */
    checked?: boolean;
    /** If true, overrides 'checked' and puts the checkbox in mixed state */
    indeterminate?: boolean;
    /** Called when the checkbox changed (uncontrolled) or should change (controlled). */
    onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}
export default Checkbox;
