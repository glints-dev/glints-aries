import { Spacing } from '../Spacing';
import { ShadowValueType } from '../../Utils/Shadow';

// Responsive
export type BreakpointAliases =
  | 'default'
  | 'mobileS'
  | 'mobileM'
  | 'mobileL'
  | 'tablet'
  | 'desktopS'
  | 'desktopM'
  | 'desktopL';

// Space
export type SpacingScaleValues = typeof Spacing[keyof typeof Spacing] | 'auto';

export type ResponsiveSpacing = {
  [key in BreakpointAliases]?: SpacingScaleValues;
};

type SpacingValueType = SpacingScaleValues | ResponsiveSpacing;

export interface BoxProps {
  /** padding */
  p?: SpacingValueType;
  /** padding-top */
  pt?: SpacingValueType;
  /** padding-right */
  pr?: SpacingValueType;
  /** padding-bottom */
  pb?: SpacingValueType;
  /** padding-left */
  pl?: SpacingValueType;
  /** padding-left and padding-right */
  px?: SpacingValueType;
  /** padding-top and padding-bottom */
  py?: SpacingValueType;
  /** margin */
  m?: SpacingValueType;
  /** margin-top */
  mt?: SpacingValueType;
  /** margin-right */
  mr?: SpacingValueType;
  /** margin-bottom */
  mb?: SpacingValueType;
  /** margin-left */
  ml?: SpacingValueType;
  /** margin-left and margin-right */
  mx?: SpacingValueType;
  /** margin-top and margin-bottom */
  my?: SpacingValueType;
  /** box-shadow */
  boxShadow?: ShadowValueType;
}
