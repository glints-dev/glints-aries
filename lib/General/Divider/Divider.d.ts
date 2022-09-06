import { FC, HTMLAttributes } from 'react';
/**
 * Use className or style to change the divider's
 * height
 */
export declare const Divider: FC<Props>;
export declare type Theme = 'red' | 'blue' | 'yellow' | 'white' | 'grey' | 'default';
export interface Props extends HTMLAttributes<HTMLDivElement> {
    theme?: Theme;
}
export default Divider;
