import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import * as Breakpoints from '../../../utilities/breakpoints';
import { Variant as TypographyVariant } from '../../../Typography';
import { space4 } from '../../../utilities/spacing';
import { SkeletonShimmer } from '../../SkeletonStyle';

interface StyledSkeletonTextProps {
  width?: string;
  variant?: TypographyVariant;
}

const headline1 = css`
  height: 45px;

  @media (max-width: ${Breakpoints.large}) {
    height: 35px;
  }
`;

const headline2 = css`
  height: 40px;

  @media (max-width: ${Breakpoints.large}) {
    height: 30px;
  }
`;

const headline3 = css`
  height: 36.4px;

  @media (max-width: ${Breakpoints.large}) {
    height: 28.6px;
  }
`;

const headline4 = css`
  height: 31.2px;

  @media (max-width: ${Breakpoints.large}) {
    height: 26px;
  }
`;

const headline5 = css`
  height: 28px;

  @media (max-width: ${Breakpoints.large}) {
    height: 25.2px;
  }
`;

const headline6 = css`
  height: 25.2px;

  @media (max-width: ${Breakpoints.large}) {
    height: 22.4px;
  }
`;

const subtitle1 = css`
  height: 24px;
`;

const subtitle2 = css`
  height: 19.5px;

  @media (max-width: ${Breakpoints.large}) {
    height: 18px;
  }
`;

const body1 = css`
  height: 21px;
`;

const body2 = css`
  height: 21px;

  @media (max-width: ${Breakpoints.large}) {
    height: 19.6px;
  }
`;

const button = css`
  height: 21px;

  @media (max-width: ${Breakpoints.large}) {
    height: 19.6px;
  }
`;

const caption = css`
  height: 16.8px;
`;

const overline = css`
  height: 15.4px;
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

export const StyledSkeletonText = styled.li<StyledSkeletonTextProps>`
  ${props => variantHeightMapping[props.variant]}
  width: ${props => props.width};

  ${SkeletonShimmer}
`;

export const SkeletonTextContainer = styled.ul`
  list-style: none;
  width: 100%;

  li:not(:last-child) {
    margin-bottom: ${space4};
  }
`;
