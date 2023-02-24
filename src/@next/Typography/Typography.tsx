import React, { ElementType, ReactNode } from 'react';

import { StyledTypography } from './TypographyStyles';

const typographyVariant = [
  'headline1',
  'headline2',
  'headline3',
  'headline4',
  'headline5',
  'headline6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'button',
  'caption',
  'overline',
] as const;

export type Variant = typeof typographyVariant[number];

export interface TypographyProps {
  /** Sets the Typography's element */
  as?: ElementType;
  children: ReactNode;
  /** Sets the Typography's color */
  color?: string;
  /** Sets the Typography's variant */
  variant?: Variant;
  style?: React.CSSProperties;
}

const isVariant = (str: any): str is Variant => typographyVariant.includes(str);

export const Typography = ({
  as = 'p',
  children,
  variant,
  style,
  ...props
}: TypographyProps) => {
  if (!isVariant(variant)) {
    console.warn(
      `Variant: ${variant} is not of type Variant | undefined. \ntype Variant ${typographyVariant}`
    );
  }

  return (
    <StyledTypography style={style} as={as} variant={variant} {...props}>
      {children}
    </StyledTypography>
  );
};
