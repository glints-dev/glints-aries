/* @flow */

import React from 'react';
import { PrimaryContainer, PrimaryBtn } from '../../Style/General/ButtonStyle';

const PrimaryButton = ({
  children,
  className,
  theme,
  disabled,
  block,
  small,
  ...defaultProps
}: Props) => (
  <PrimaryContainer
    className={className}
    theme={theme}
    disabled={disabled}
    block={block}
    small={small}
  >
    <PrimaryBtn
      className={`primaryButton ${className}`}
      theme={theme}
      disabled={disabled}
      block={block}
      small={small}
      {...defaultProps}
    >
      {children}
    </PrimaryBtn>
  </PrimaryContainer>
);

type Props = {
  children: React$Node,
  className: string,
  theme: string,
  disabled: boolean,
  block: boolean,
  small: boolean,
}

export default PrimaryButton;
