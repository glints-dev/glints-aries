import { Spacing } from '../Spacing';

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
export type MarginProps = {
  [key in MarginTypes]?: SpacingScaleValues | ResponsiveSpacing;
};

type PaddingTypes = 'p' | 'pt' | 'pb' | 'pl' | 'pr' | 'py' | 'px';
export type PaddingProps = {
  [key in PaddingTypes]?: SpacingScaleValues | ResponsiveSpacing;
};
