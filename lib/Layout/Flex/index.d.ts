import * as React from 'react';
import { BoxProps } from '../Box/types';
import { FlexProps } from './types';
declare type Props = FlexProps & BoxProps & {
    style?: React.CSSProperties;
};
export declare const StyledFlex: import("styled-components").StyledComponent<React.FC<BoxProps>, any, FlexProps & BoxProps & {
    style?: React.CSSProperties;
}, never>;
export declare const Flex: React.FC<Props>;
export {};
