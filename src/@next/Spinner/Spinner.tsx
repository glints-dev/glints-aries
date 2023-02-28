import React from 'react';
import { Icon, IconProps } from '../Icon';
import { Variant as TypographyVariant } from '../Typography';
import { Label, StyledWrapper } from './SpinnerStyle';

export type Size = 'small' | 'large';
export type SpinnerProps = Omit<IconProps, 'name'> & {
  label?: string;
  size?: Size;
};

const iconSizeMapping = {
  ['small']: '18px',
  ['large']: '48px',
};

const labelVariantMapping: { [size in Size]: TypographyVariant } = {
  ['small']: 'body1',
  ['large']: 'subtitle1',
};

export const Spinner = ({ label, size, ...props }: SpinnerProps) => (
  <StyledWrapper className="spinner-container">
    <Icon
      name="ri-loader"
      height={iconSizeMapping[size]}
      width={iconSizeMapping[size]}
      {...props}
    />
    {label && (
      <Label variant={labelVariantMapping[size]} data-size={size}>
        {label}
      </Label>
    )}
  </StyledWrapper>
);
