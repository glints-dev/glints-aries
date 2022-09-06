import * as React from 'react';
import { TextFieldInput } from './TextFieldStyle';
export declare const isFilled: (type: textFieldType, value: any) => boolean;
/** Use onChange to listen to input changes.
 * Use onBlur to listen to focus loss.
 * <br/>
 * Use status to set different styles for the Text Field based on status.
 * <br/>
 * Use small to set the size of the text field. The ...rest is passed to the
 * internal text field input. */
export declare const TextField: React.FunctionComponent<Props>;
export declare type textFieldType = 'text' | 'password' | 'number';
export declare type Props = React.ComponentPropsWithoutRef<typeof TextFieldInput> & {
    type: textFieldType;
    /** Placeholder for the text field. */
    label: string;
    disabled?: boolean;
    className?: string;
    removeFloatingLabel?: boolean;
    /** If true, removes the input content with clear icon. Works for type "text" only. */
    allowClear?: boolean;
    /** Minimum value of the "number" type input */
    min?: number;
    /** Maximum value of the "number" type input. */
    max?: number;
    /** Step value for the "number" type input */
    step?: number;
    forwardedRef?: React.RefObject<HTMLInputElement>;
    /** Icon at the start of the input element. */
    startIcon?: React.ReactNode;
    /** Icon at the end of the input element. */
    endIcon?: React.ReactNode;
};
declare const _default: React.ForwardRefExoticComponent<(Pick<Pick<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: any;
} & {
    as?: string | React.ComponentType<any>;
    forwardedAs?: string | React.ComponentType<any>;
}, string | number | symbol> & {
    type: textFieldType;
    /** Placeholder for the text field. */
    label: string;
    disabled?: boolean;
    className?: string;
    removeFloatingLabel?: boolean;
    /** If true, removes the input content with clear icon. Works for type "text" only. */
    allowClear?: boolean;
    /** Minimum value of the "number" type input */
    min?: number;
    /** Maximum value of the "number" type input. */
    max?: number;
    /** Step value for the "number" type input */
    step?: number;
    forwardedRef?: React.RefObject<HTMLInputElement>;
    /** Icon at the start of the input element. */
    startIcon?: React.ReactNode;
    /** Icon at the end of the input element. */
    endIcon?: React.ReactNode;
}, string | number | symbol> | Pick<Pick<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: any;
} & {
    children?: React.ReactNode;
} & {
    as?: string | React.ComponentType<any>;
    forwardedAs?: string | React.ComponentType<any>;
}, string | number | symbol> & {
    type: textFieldType;
    /** Placeholder for the text field. */
    label: string;
    disabled?: boolean;
    className?: string;
    removeFloatingLabel?: boolean;
    /** If true, removes the input content with clear icon. Works for type "text" only. */
    allowClear?: boolean;
    /** Minimum value of the "number" type input */
    min?: number;
    /** Maximum value of the "number" type input. */
    max?: number;
    /** Step value for the "number" type input */
    step?: number;
    forwardedRef?: React.RefObject<HTMLInputElement>;
    /** Icon at the start of the input element. */
    startIcon?: React.ReactNode;
    /** Icon at the end of the input element. */
    endIcon?: React.ReactNode;
}, string | number | symbol>) & React.RefAttributes<HTMLInputElement>>;
export default _default;
