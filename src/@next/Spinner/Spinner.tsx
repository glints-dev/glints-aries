import React, { useEffect, useState } from 'react';
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

export const Spinner = ({ label, size, ...props }: SpinnerProps) => {
  const [iconSize, setIconSize] = useState(null);

  useEffect(() => {
    setIconSize(iconSizeMapping[size]);
  }, [size]);

  return (
    <StyledWrapper className="spinner-container">
      <Icon name="ri-loader" height={iconSize} width={iconSize} {...props} />
      {label && (
        <Label variant={labelVariantMapping[size]} data-size={size}>
          {label}
        </Label>
      )}
    </StyledWrapper>
  );
};
