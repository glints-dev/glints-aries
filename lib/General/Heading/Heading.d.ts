import { HTMLAttributes, FC } from 'react';
export declare const Heading: FC<Props>;
export interface Props extends HTMLAttributes<HTMLHeadingElement> {
    inline?: boolean;
    uppercaseText?: boolean;
}
export default Heading;
