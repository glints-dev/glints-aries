import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import * as Breakpoints from '../../../utilities/breakpoints';
import { Neutral } from '../../../utilities/colors';
import { Variant as TypographyVariant } from '../../../Typography';
import { SkeletonTextProps } from './SkeletonText';
import { space4 } from '../../../utilities/spacing';

const headline1 = css`
  height: 60px;

  @media (max-width: ${Breakpoints.large}) {
    height: 36px;
  }
`;

const headline2 = css`
  height: 50px;

  @media (max-width: ${Breakpoints.large}) {
    height: 32px;
  }
`;

const headline3 = css`
  height: 36px;

  @media (max-width: ${Breakpoints.large}) {
    height: 28px;
  }
`;

const headline4 = css`
  height: 30px;

  @media (max-width: ${Breakpoints.large}) {
    height: 24px;
  }
`;

const headline5 = css`
  height: 26px;

  @media (max-width: ${Breakpoints.large}) {
    height: 20px;
  }
`;

const headline6 = css`
  height: 24px;

  @media (max-width: ${Breakpoints.large}) {
    height: 18px;
  }
`;

const subtitle1 = css`
  height: 20px;

  @media (max-width: ${Breakpoints.large}) {
    height: 16px;
  }
`;

const subtitle2 = css`
  height: 14px;

  @media (max-width: ${Breakpoints.large}) {
    height: 12px;
  }
`;

const body1 = css`
  height: 16px;

  @media (max-width: ${Breakpoints.large}) {
    height: 14px;
  }
`;

const body2 = css`
  height: 16px;

  @media (max-width: ${Breakpoints.large}) {
    height: 14px;
  }
`;

const button = css`
  height: 14px;
`;

const caption = css`
  height: 14px;

  @media (max-width: ${Breakpoints.large}) {
    height: 12px;
  }
`;

const overline = css`
  height: 12px;

  @media (max-width: ${Breakpoints.large}) {
    height: 10px;
  }
`;

const variantHeightMapping: {
  [variant in TypographyVariant]: FlattenSimpleInterpolation;
} = {
  ['headline1']: headline1,
  ['headline2']: headline2,
  ['headline3']: headline3,
  ['headline4']: headline4,
  ['headline5']: headline5,
  ['headline6']: headline6,
  ['subtitle1']: subtitle1,
  ['subtitle2']: subtitle2,
  ['body1']: body1,
  ['body2']: body2,
  ['button']: button,
  ['caption']: caption,
  ['overline']: overline,
};

export const StyledSkeletonText = styled.div<SkeletonTextProps>`
  background-color: ${Neutral.B95};
  ${props => variantHeightMapping[props.variant] as TypographyVariant}
  width: ${props => props.width};
  margin-bottom: ${space4};
`;

export const SkeletonTextContainer = styled.div<SkeletonTextProps>`
  width: ${props => props.width};
`;
