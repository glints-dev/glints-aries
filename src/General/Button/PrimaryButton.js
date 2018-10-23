/* @flow */

import React from 'react';
import { PrimaryContainer, PrimaryBtn } from '../../Style/General/ButtonStyle';

const PrimaryButton = ({
  children,
  className,
  theme,
  disabled,
  ...defaultProps
}: Props) => (
  <PrimaryContainer theme={theme} className={className} disabled={disabled}>
    <PrimaryBtn className={`primaryButton ${className}`} theme={theme} {...defaultProps}>
      {children}
    </PrimaryBtn>
  </PrimaryContainer>
);

type Props = {
  children: React$Node,
  className: string,
  theme: string,
}

export default PrimaryButton;
