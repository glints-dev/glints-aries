import React, { HTMLAttributes, FC } from 'react';
export declare const Tooltip: FC<Props>;
export interface Classes {
    container?: string;
    content?: string;
    message?: string;
}
export declare type Position = 'top' | 'right' | 'bottom' | 'left';
interface BaseProps extends HTMLAttributes<HTMLHeadingElement> {
    classes?: Classes;
    position?: Position;
}
export interface StringTooltip extends BaseProps {
    text: string;
    textAsString?: string;
}
export interface HtmlTooltip extends BaseProps {
    text: React.ReactNode;
    textAsString: string;
}
export declare type Props = StringTooltip | HtmlTooltip;
export default Tooltip;
