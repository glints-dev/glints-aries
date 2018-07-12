import React from 'react';
import { SecondaryContainer, SecondaryBtn } from '../Style/ButtonStyle';

type Props = {
  theme: string,
  onClick: Function,
  children: React.Node,
  className: string
}

const SecondaryButton = ({ children, ...defaultButtonProps }: Props) => (
  <SecondaryContainer {...defaultButtonProps}>
    <SecondaryBtn>
      {children}
    </SecondaryBtn>
  </SecondaryContainer>
);

export default SecondaryButton;
