import React, { ElementType, FunctionComponent, ReactNode } from 'react';

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
  /** Sets the Typography's element */
  as?: ElementType;
  children: ReactNode;
  /** Sets the Typography's color */
  color?: string;
  /** Sets the Typography's variant */
  variant?: Variant;
}

export const Typography: FunctionComponent<TypographyProps> = ({
  as = 'p',
  children,
  variant,
  ...props
}) => {
  return (
    <StyledTypography as={as} variant={variant} {...props}>
      {children}
    </StyledTypography>
  );
};
