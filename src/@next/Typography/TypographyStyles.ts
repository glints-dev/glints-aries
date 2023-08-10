import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { TypographyProps, Variant } from './Typography';
import * as Breakpoints from '../utilities/breakpoints';
import { NotoSans, Poppins } from '../utilities/fonts';

export const headline1 = css`
  font-family: ${Poppins}, sans-serif;
  font-weight: 700;
  font-size: 60px;
  line-height: 140%;
  letter-spacing: 0;

  @media (max-width: ${Breakpoints.large}) {
    font-size: 36px;
  }
`;

export const headline2 = css`
  font-family: ${Poppins}, sans-serif;
  font-weight: 700;
  font-size: 50px;
  line-height: normal;
  letter-spacing: 0;

  @media (max-width: ${Breakpoints.large}) {
    font-weight: 600;
    font-size: 32px;
    line-height: 140%;
  }
`;

export const headline3 = css`
  font-family: ${Poppins}, sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: normal;
  letter-spacing: 0;

  @media (max-width: ${Breakpoints.large}) {
    font-weight: 600;
    font-size: 28px;
    line-height: 140%;
  }
`;

export const headline4 = css`
  font-family: ${Poppins}, sans-serif;
  font-weight: 700;
  font-size: 30px;
  line-height: 140%;
  letter-spacing: 0;

  @media (max-width: ${Breakpoints.large}) {
    font-weight: 600;
    font-size: 24px;
    line-height: 150%;
  }
`;

export const headline5 = css`
  font-family: ${Poppins}, sans-serif;
  font-weight: 700;
  font-size: 26px;
  line-height: normal;
  letter-spacing: 0;

  @media (max-width: ${Breakpoints.large}) {
    font-weight: 600;
    font-size: 20px;
  }
`;

export const headline6 = css`
  font-family: ${NotoSans}, sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  letter-spacing: 0;

  @media (max-width: ${Breakpoints.large}) {
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 0.15px;
  }
`;

export const subtitle1 = css`
  font-family: ${NotoSans}, sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: 0.15px;

  @media (max-width: ${Breakpoints.large}) {
    font-size: 16px;
  }
`;

export const subtitle2 = css`
  font-family: ${NotoSans}, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0.25px;

  @media (max-width: ${Breakpoints.large}) {
    font-size: 12px;
    letter-spacing: 0;
  }
`;

export const body1 = css`
  font-family: ${NotoSans}, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0px;

  @media (max-width: ${Breakpoints.large}) {
    font-size: 14px;
  }
`;

export const body2 = css`
  font-family: ${NotoSans}, sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.25px;

  @media (max-width: ${Breakpoints.large}) {
    font-size: 14px;
    line-height: 140%;
    letter-spacing: 0;
  }
`;

export const button = css`
  font-family: ${NotoSans}, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0.75px;

  @media (max-width: ${Breakpoints.large}) {
    font-weight: 600;
    letter-spacing: 0.25px;
  }
`;

export const caption = css`
  font-family: ${NotoSans}, sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0.25px;

  @media (max-width: ${Breakpoints.large}) {
    font-size: 12px;
    letter-spacing: 0px;
  }
`;

export const overline = css`
  font-family: ${NotoSans}, sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 140%;
  letter-spacing: 1.5px;

  @media (max-width: ${Breakpoints.large}) {
    font-size: 10px;
    letter-spacing: 0.2px;
  }
`;

export const variantCssMapping: {
  [variant in Variant]: FlattenSimpleInterpolation;
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

export const StyledTypography = styled.p<TypographyProps>`
  color: ${props => props.color};
  ${props => variantCssMapping[props.variant]}
`;
