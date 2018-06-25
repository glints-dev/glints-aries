/* @flow */
import React from 'react';
import { LabelWrapper } from './../Style/LabelStyle';

const Label = (props: Props) => {
  const {
    children,
    variant,
    ...defaultLabelProps
  } = props;

  return (
    <LabelWrapper
      variant={variant}
      {...defaultLabelProps}
    >{children}</LabelWrapper>
  );
}

// flow type checking goes here
type LabelVariant = 'secondary' | 'red' | 'yellow' | 'blue' | 'white';

type Props = {
  variant: LabelVariant,
};

type HandlerProps = {
  variant?: LabelVariant,
};

export default Label;
