/* @flow */

import React from 'react';
import { PrimaryContainer, PrimaryBtn } from '../Style/ButtonStyle';

const PrimaryButton = ({ children, ...defaultButtonProps }: Props) => (
  <PrimaryContainer>
    <PrimaryBtn {...defaultButtonProps}>
      {children}
    </PrimaryBtn>
  </PrimaryContainer>
);

type Props = {
  theme: string,
  onClick: Function,
  children: React$Node,
  className: string,
}

export default PrimaryButton;
