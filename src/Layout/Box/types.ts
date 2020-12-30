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
type MarginTypes = 'm' | 'mt' | 'mb' | 'ml' | 'mr' | 'my' | 'mx';
type MarginProps = {
  [key in MarginTypes]?: SpacingScaleValues | ResponsiveSpacing;
};

type PaddingTypes = 'p' | 'pt' | 'pb' | 'pl' | 'pr' | 'py' | 'px';
type PaddingProps = {
  [key in PaddingTypes]?: SpacingScaleValues | ResponsiveSpacing;
};

type BoxShadowProps = {
  boxShadow?: ShadowValueType;
};

export type BoxProps = MarginProps & PaddingProps & BoxShadowProps;
