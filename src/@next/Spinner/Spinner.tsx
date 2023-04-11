import React from 'react';
import { Icon, IconProps } from '../Icon';
import { IconNames } from '../Icon/icons/icons';
import { Variant as TypographyVariant } from '../Typography';
import { Label, StyledWrapper } from './SpinnerStyle';

export type Size = 'small' | 'large';
export type Variant = 'loading' | 'processing';

export type SpinnerProps = Omit<IconProps, 'name'> & {
  label?: string;
  size?: Size;
  variant?: Variant;
};

const loadingIconSizeMapping = {
  ['small']: '18px',
  ['large']: '48px',
};

const processingIconSizeMapping = {
  ['small']: '20px',
  ['large']: '54px',
};

const labelVariantMapping: { [size in Size]: TypographyVariant } = {
  ['small']: 'body1',
  ['large']: 'subtitle1',
};

const variantIconMapping: { [variant in Variant]: IconNames } = {
  ['loading']: 'ri-loader',
  ['processing']: 'ri-loader-2',
};

const variantSizeMapping = {
  ['loading']: loadingIconSizeMapping,
  ['processing']: processingIconSizeMapping,
};

export const Spinner = ({
  label,
  size,
  variant = 'loading',
  ...props
}: SpinnerProps) => (
  <StyledWrapper
    className="spinner-container"
    data-processing={variant === 'processing'}
  >
    <Icon
      name={variantIconMapping[variant]}
      height={variantSizeMapping[variant][size]}
      width={variantSizeMapping[variant][size]}
      {...props}
    />
    {label && (
      <Label variant={labelVariantMapping[size]} data-size={size}>
        {label}
      </Label>
    )}
  </StyledWrapper>
);
