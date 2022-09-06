import React from 'react';
export declare const transformVariant: (variant: string, theme?: string) => string;
export declare const Button: React.FC<Props>;
export declare type ButtonVariantType = 'solid-white' | 'solid-blue' | 'yellow' | 'ghost' | 'white-grey' | 'link';
export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Make the button fit to its parent width. */
    block?: boolean;
    className?: string;
    /** Sets Button to disable state. */
    disabled?: boolean;
    /** Callback when click. */
    onClick?(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
    /** Sets Button to small version. */
    small?: boolean;
    /** The variant of the button. */
    variant?: ButtonVariantType;
    /** Changes the tag with which the button will render. */
    tag?: React.ElementType;
    /** Element placed before the children. */
    startIcon?: React.ReactNode;
    /** Element placed after the children. */
    endIcon?: React.ReactNode;
    /** Deprecated! */
    theme?: string;
    forwardedRef?: React.RefObject<HTMLButtonElement>;
    /** Determines if the button should have rounded corners */
    isRoundedCorner?: boolean;
}
declare const _default: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLButtonElement>>;
export default _default;
