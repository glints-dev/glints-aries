import React from 'react';
import { PrimaryContainer, PrimaryBtn } from '../Style/ButtonStyle';

type Props = {
  theme: string,
  onClick: Function,
  children: React.Node,
  className: string
}

const PrimaryButton = ({ children, ...defaultButtonProps }: Props) => (
  <PrimaryContainer>
    <PrimaryBtn {...defaultButtonProps}>
      {children}
    </PrimaryBtn>
  </PrimaryContainer>
);

export default PrimaryButton;
