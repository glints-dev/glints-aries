/* @flow */

import React from 'react';
import { SecondaryContainer, SecondaryBtn } from '../Style/ButtonStyle';

const SecondaryButton = ({ children, ...defaultButtonProps }: Props) => (
  <SecondaryContainer {...defaultButtonProps}>
    <SecondaryBtn>
      {children}
    </SecondaryBtn>
  </SecondaryContainer>
);

type Props = {
  theme: string,
  onClick: Function,
  children: React$Node,
  className: string,
}

export default SecondaryButton;
