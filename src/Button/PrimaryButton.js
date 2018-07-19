/* @flow */

import React from 'react';
import { PrimaryContainer, PrimaryBtn } from '../Style/ButtonStyle';

const PrimaryButton = ({ 
  children, 
  theme, 
  className,
  ...defaultButtonProps 
}: Props) => (
  
  <PrimaryContainer theme={theme} className={className}>
    <PrimaryBtn className="primaryButton" theme={theme} {...defaultButtonProps}>
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
