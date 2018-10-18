/* @flow */

import React from 'react';
import { PrimaryContainer, PrimaryBtn } from '../../Style/General/ButtonStyle';

const PrimaryButton = ({
  children,
  className,
  theme,
  ...defaultProps
}: Props) => (
  <PrimaryContainer theme={theme} className={className} {...defaultProps}>
    <PrimaryBtn className={`primaryButton ${className}`} theme={theme}>
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
