import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { TypographyProps, Variant } from './Typography';
import * as Breakpoints from '../utilities/breakpoints';
import { NotoSans, Poppins } from '../utilities/fonts';

const headline1 = css`
  font-family: ${Poppins}, sans-serif;
  font-weight: 700;
  font-size: 60px;
  line-height: 140%;
  letter-spacing: 0;

  @media (max-width: ${Breakpoints.large}) {
    font-size: 36px;
  }
`;

const headline2 = css`
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

const headline3 = css`
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

const headline4 = css`
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

const headline5 = css`
  font-weight: 700;
  font-size: 26px;
  line-height: normal;
  letter-spacing: 0;

  @media (max-width: ${Breakpoints.large}) {
    font-weight: 600;
    font-size: 20px;
  }
`;

const headline6 = css`
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

const subtitle1 = css`
  font-family: ${NotoSans}, sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: 0.15px;

  @media (max-width: ${Breakpoints.large}) {
    font-size: 16px;
  }
`;

const subtitle2 = css`
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

const body1 = css`
  font-family: ${NotoSans}, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0px;

  @media (max-width: ${Breakpoints.large}) {
    font-size: 14px;
  }
`;

const body2 = css`
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

const button = css`
  font-family: ${NotoSans}, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 1.25px;

  @media (max-width: ${Breakpoints.large}) {
    font-weight: 600;
    line-height: 150%;
    letter-spacing: 0.25px;
  }
`;

const caption = css`
  font-family: ${NotoSans}, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: 0.4px;

  @media (max-width: ${Breakpoints.large}) {
    font-weight: 500;
    font-size: 12px;
    letter-spacing: 0.2px;
  }
`;

const overline = css`
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
