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
  height: 84px;

  @media (max-width: ${Breakpoints.large}) {
    height: 36px;
  }
`;

const headline2 = css`
  height: 75px;

  @media (max-width: ${Breakpoints.large}) {
    height: 32px;
  }
`;

const headline3 = css`
  height: 54px;

  @media (max-width: ${Breakpoints.large}) {
    height: 28px;
  }
`;

const headline4 = css`
  height: 42px;

  @media (max-width: ${Breakpoints.large}) {
    height: 24px;
  }
`;

const headline5 = css`
  height: 39px;

  @media (max-width: ${Breakpoints.large}) {
    height: 20px;
  }
`;

const headline6 = css`
  height: 36px;

  @media (max-width: ${Breakpoints.large}) {
    height: 18px;
  }
`;

const subtitle1 = css`
  height: 32px;

  @media (max-width: ${Breakpoints.large}) {
    height: 16px;
  }
`;

const subtitle2 = css`
  height: 21px;

  @media (max-width: ${Breakpoints.large}) {
    height: 18px;
  }
`;

const body1 = css`
  height: 24px;

  @media (max-width: ${Breakpoints.large}) {
    height: 21px;
  }
`;

const body2 = css`
  height: 24px;

  @media (max-width: ${Breakpoints.large}) {
    height: 21px;
  }
`;

const button = css`
  height: 14px;
`;

const caption = css`
  height: 20px;

  @media (max-width: ${Breakpoints.large}) {
    height: 17px;
  }
`;

const overline = css`
  height: 17px;

  @media (max-width: ${Breakpoints.large}) {
    height: 14px;
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
