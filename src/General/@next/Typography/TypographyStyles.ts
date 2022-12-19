import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { TypographyProps, Variant } from './Typography';

const headline1 = css`
  font-family: Poppins, sans-serif;
  font-weight: 700;
  font-size: 60px;
  line-height: 140%;
  letter-spacing: 0;
`;

const headline2 = css`
  font-family: Poppins, sans-serif;
  font-weight: 700;
  font-size: 50px;
  line-height: normal;
  letter-spacing: 0;
`;

const headline3 = css`
  font-family: Poppins, sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: normal;
  letter-spacing: 0;
`;

const headline4 = css`
  font-family: Poppins, sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 140%;
  letter-spacing: 0;
`;

const headline5 = css`
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  letter-spacing: 0;
`;

// typeface: Noto Sans
const headline6 = css`
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  letter-spacing: 0;
`;

// typeface: Noto Sans
const subtitle1 = css`
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: 0.15px;
`;

// typeface: Noto Sans
const subtitle2 = css`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0.25px;
`;

// typeface: Noto Sans
const body1 = css`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0px;
`;

// typeface: Noto Sans
const body2 = css`
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.25px;
`;

// typeface: Noto Sans
const button = css`
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 1.25px;
`;

// typeface: Noto Sans
const caption = css`
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: 0.4px;
`;

// typeface: Noto Sans
const overline = css`
  font-weight: 500;
  font-size: 12px;
  line-height: 140%;
  letter-spacing: 1.5px;
`;

const variantCssMapping: {
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
