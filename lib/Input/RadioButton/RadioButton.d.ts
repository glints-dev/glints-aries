import * as React from 'react';
/** The className will be passed to
 * the main radio button container. ...inputProps is passed to the
 * input tag. */
export declare const RadioButton: React.FunctionComponent<Props>;
declare type HTMLInputProps = Omit<React.HTMLProps<HTMLInputElement>, 'size' | 'label'>;
export interface Props extends HTMLInputProps {
    /** Displays the error styles */
    error?: boolean;
    /** Sets the label of Radio Button. */
    label?: React.ReactNode;
    /** Sets the props on the label element. */
    labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
    /** Sets theme for Radio Button. */
    theme?: 'white';
    /** Sets a border around the radio button. */
    border?: boolean;
    /** Sets the radio button to disable state. */
    disabled?: boolean;
    /** Sets the size of the radio button. */
    size?: 'regular' | 'small';
}
export default RadioButton;
