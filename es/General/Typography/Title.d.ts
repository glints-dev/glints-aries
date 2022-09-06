import * as React from 'react';
export declare const Title: React.FunctionComponent<Props>;
export declare type tagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export interface Props {
    className?: string;
    children: React.ReactNode;
    /** Sets the Title's color */
    color?: string;
    /** Display ellipsis when the title overflows */
    ellipsis?: boolean;
    /** Sets the title tag to one of the heading tags */
    tag?: tagType;
    /** Makes the title in all upper case */
    uppercase?: boolean;
}
export default Title;
