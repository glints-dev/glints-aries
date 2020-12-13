import { SpacingScaleValues } from '../Spacing';

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
type ResponsiveSpacing = {
  [key in BreakpointAliases]?: SpacingScaleValues | 'auto';
};
type MarginTypes = 'm' | 'mt' | 'mb' | 'ml' | 'mr' | 'my' | 'mx';
export type MarginProps = {
  [key in MarginTypes]?: SpacingScaleValues | 'auto' | ResponsiveSpacing;
};

type PaddingTypes = 'p' | 'pt' | 'pb' | 'pl' | 'pr' | 'py' | 'px';
export type PaddingProps = {
  [key in PaddingTypes]?: SpacingScaleValues | 'auto' | ResponsiveSpacing;
};
