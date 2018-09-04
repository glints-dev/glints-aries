/* @flow */

import React from 'react';
import { PrimaryContainer, PrimaryBtn } from '../Style/ButtonStyle';

const PrimaryButton = ({
  id,
  children,
  theme,
  className,
  ...defaultProps
}: Props) => (
  <PrimaryContainer theme={theme} className={className}>
    <PrimaryBtn className={`primaryButton ${className}`} id={id} theme={theme} {...defaultProps}>
      {children}
    </PrimaryBtn>
  </PrimaryContainer>
);

type Props = {
  id: string,
  theme: string,
  children: React$Node,
  className: string,
}

export default PrimaryButton;
