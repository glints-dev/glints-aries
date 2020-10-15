import * as React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';

import { ScreenSize } from '../../Utils/StyleConfig';
import { SpacingScaleValues } from '../Spacing';

// Responsive
type BreakpointAliases =
  | 'default'
  | 'ms'
  | 'mm'
  | 'ml'
  | 't'
  | 'ds'
  | 'dm'
  | 'dl';
export const breakpointAliasMap = {
  ms: `${ScreenSize.mobileS}px`,
  mm: `${ScreenSize.mobileM}px`,
  ml: `${ScreenSize.mobileL}px`,
  t: `${ScreenSize.tablet}px`,
  ds: `${ScreenSize.desktopS}px`,
  dm: `${ScreenSize.desktopM}px`,
  dl: `${ScreenSize.desktopL}px`,
};
const theme = {
  breakpoints: breakpointAliasMap,
};

// Space
type ResponsiveSpacing = {
  [key in BreakpointAliases]?: SpacingScaleValues | 'auto';
};
type MarginTypes = 'm' | 'mt' | 'mb' | 'ml' | 'mr' | 'my' | 'mx';
type MarginProps = {
  [key in MarginTypes]?: SpacingScaleValues | 'auto' | ResponsiveSpacing;
};

type PaddingTypes = 'p' | 'pt' | 'pb' | 'pl' | 'pr' | 'py' | 'px';
type PaddingProps = {
  [key in PaddingTypes]?: SpacingScaleValues | 'auto' | ResponsiveSpacing;
};

type Props = MarginProps & PaddingProps;

export const StyledBox = styled.div<Props>`
  ${space}
`;

export const Box: React.FC<Props> = props => (
  <StyledBox theme={theme} {...props} />
);
