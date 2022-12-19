import React, { ReactNode } from 'react';

import { StyledTypography } from './TypographyStyles';

export type Variant =
  | 'headline1'
  | 'headline2'
  | 'headline3'
  | 'headline4'
  | 'headline5'
  | 'headline6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'button'
  | 'caption'
  | 'overline';

export interface TypographyProps {
  as?: React.ElementType;
  children: ReactNode;
  variant?: Variant;
}

export const Typography = ({
  as,
  children,
  variant,
  ...props
}: TypographyProps) => {
  return (
    <StyledTypography as={as ? as : 'p'} variant={variant} {...props}>
      {children}
    </StyledTypography>
  );
};
