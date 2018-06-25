/* @flow */
import React from 'react';
import { LabelWrapper } from './../Style/LabelStyle';

const Label = (props: Props) => {
  const {
    children,
    size,
    variant,
    ...defaultLabelProps
  } = props;

  return (
    <LabelWrapper
      variant={variant}
      size={size}
      {...defaultLabelProps}
    >{children}</LabelWrapper>
  );
}

// flow type checking goes here
type LabelVariant = 'secondary' | 'red' | 'yellow' | 'blue' | 'white';
type SizeVariant = 'small' | 'medium' | 'large' | 'xlarge';

type Props = {
  variant: LabelVariant,
  size: SizeVariant,
};

type HandlerProps = {
  variant?: LabelVariant,
  size?: SizeVariant,
};

export default Label;
