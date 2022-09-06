import * as React from 'react';
import { BadgeContainer } from './BadgeStyle';
export declare const Badge: React.FunctionComponent<Props>;
export declare type BadgeType = 'dimmed' | 'default' | 'white' | 'blue';
export declare type Props = React.ComponentPropsWithoutRef<typeof BadgeContainer> & {
    /** Sets the label of Badge. */
    label: string | number;
    /** Sets the variant of the Badge. */
    variant?: BadgeType;
};
export default Badge;
