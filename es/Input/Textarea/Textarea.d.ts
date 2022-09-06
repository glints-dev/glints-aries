import React, { FC, HTMLAttributes, RefObject } from 'react';
/** Use onChange to listen to input changes. Use
 * onBlur to listen to focus loss.
 * <br/>
 * Note that currently, Textarea has some non-standard behaviour
 * when forwarding standard props: The className will be passed to
 * the internal 'container' while the ...rest is passed to the
 * internal textarea. */
export declare const Textarea: FC<Props>;
export declare type Status = 'default' | 'error';
export interface Props extends HTMLAttributes<HTMLTextAreaElement> {
    value?: string;
    status?: Status;
    /** Placeholder for the text area. */
    label?: string;
    removeFloatingLabel?: boolean;
    disabled?: boolean;
    forwardedRef?: RefObject<HTMLTextAreaElement>;
    small?: boolean;
}
declare const _default: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLTextAreaElement>>;
export default _default;
