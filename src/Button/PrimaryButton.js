/* @flow */

import React from 'react';
import { PrimaryContainer, PrimaryBtn } from '../Style/ButtonStyle';

const PrimaryButton = ({
  id,
  children,
  theme,
  className,
  ...defaultButtonProps
}: Props) => (
  <PrimaryContainer theme={theme} className={className}>
    <PrimaryBtn className={`primaryButton ${className}`} id={id} theme={theme} {...defaultButtonProps}>
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

PrimaryButton.defaultProps = {
  id: '',
  className: '',
};

export default PrimaryButton;
