/* @flow */

import React from 'react';
import { LabelWrapper } from './../Style/LabelStyle';

const Label = (props: Props) => {
  const {
    children,
    size,
    theme,
    className,
    ...defaultProps
  } = props;

  return (
    <LabelWrapper
      className={className}
      theme={theme}
      size={size}
      {...defaultProps}
    >{children}</LabelWrapper>
  );
}

// flow type checking goes here
type LabelVariant = 'red' | 'blue' | 'yellow' | 'grey' | 'white';
type SizeVariant = 'small' | 'medium' | 'large' | 'xlarge';

type Props = {
  theme: LabelVariant,
  size: SizeVariant,
  children: React$Node,
  className: string,
};

type HandlerProps = {
  theme: LabelVariant,
  size: SizeVariant,
  children: React$Node,
};

export default Label;
