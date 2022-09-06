import * as React from 'react';
export declare const iconSizeMap: {
    xxs: string;
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
    xxl: string;
    xxxl: string;
};
declare const Icon: React.FunctionComponent<Props>;
export interface Props {
    className?: string;
    children: React.ReactNode;
    color?: string;
    width?: string | number;
    height?: string | number;
    size?: keyof typeof iconSizeMap;
    onClick?(e: React.MouseEvent<SVGSVGElement, MouseEvent>): void;
}
export default Icon;
