/* @flow */

import React from 'react';
import { PrimaryContainer, PrimaryBtn } from '../../Style/ButtonStyle';

const PrimaryButton = ({
  children,
  theme,
  className,
  ...defaultProps
}: Props) => (
  <PrimaryContainer theme={theme} className={className}>
    <PrimaryBtn className={`primaryButton ${className}`} theme={theme} {...defaultProps}>
      {children}
    </PrimaryBtn>
  </PrimaryContainer>
);

type Props = {
  theme: string,
  children: React$Node,
  className: string,
}

export default PrimaryButton;
