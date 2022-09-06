import { Spacing } from '../Spacing';
import { ShadowValueType } from '../../Utils/Shadow';
import { HTMLAttributes } from 'react';
export declare type BreakpointAliases = 'default' | 'mobileS' | 'mobileM' | 'mobileL' | 'tablet' | 'desktopS' | 'desktopM' | 'desktopL';
export declare type SpacingScaleValues = typeof Spacing[keyof typeof Spacing] | 'auto';
export declare type ResponsiveSpacing = {
    [key in BreakpointAliases]?: SpacingScaleValues;
};
declare type SpacingValueType = SpacingScaleValues | ResponsiveSpacing;
export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
    /** CSS property padding */
    p?: SpacingValueType;
    /** CSS property padding-top */
    pt?: SpacingValueType;
    /** CSS property padding-right */
    pr?: SpacingValueType;
    /** CSS property padding-bottom */
    pb?: SpacingValueType;
    /** CSS property padding-left */
    pl?: SpacingValueType;
    /** CSS property padding-left and padding-right */
    px?: SpacingValueType;
    /** CSS property padding-top and padding-bottom */
    py?: SpacingValueType;
    /** CSS property margin */
    m?: SpacingValueType;
    /** CSS property margin-top */
    mt?: SpacingValueType;
    /** CSS property margin-right */
    mr?: SpacingValueType;
    /** CSS property margin-bottom */
    mb?: SpacingValueType;
    /** CSS property margin-left */
    ml?: SpacingValueType;
    /** CSS property margin-left and margin-right */
    mx?: SpacingValueType;
    /** CSS property margin-top and margin-bottom */
    my?: SpacingValueType;
    /** CSS property box-shadow */
    boxShadow?: ShadowValueType;
}
export {};
