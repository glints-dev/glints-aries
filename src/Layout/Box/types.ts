import { ScreenSize } from '../../Utils/StyleConfig';
import { SpacingScaleValues } from '../Spacing';

// Responsive
type BreakpointAliases =
  | 'default'
  | 'mobileS'
  | 'mobileM'
  | 'mobileL'
  | 'tablet'
  | 'desktopS'
  | 'desktopM'
  | 'desktopL';
export const breakpointAliasMap = {
  mobileS: `${ScreenSize.mobileS}px`,
  mobileM: `${ScreenSize.mobileM}px`,
  mobileL: `${ScreenSize.mobileL}px`,
  tablet: `${ScreenSize.tablet}px`,
  desktopS: `${ScreenSize.desktopS}px`,
  desktopM: `${ScreenSize.desktopM}px`,
  desktopL: `${ScreenSize.desktopL}px`,
};

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
