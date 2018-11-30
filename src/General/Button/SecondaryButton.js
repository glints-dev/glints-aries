/* @flow */

import React from 'react';
import { SecondaryContainer, SecondaryBtn } from '../../Style/General/ButtonStyle';

const SecondaryButton = ({
  children,
  className,
  block,
  small,
  disabled,
  ...defaultProps
}: Props) => (

  <SecondaryContainer
    className={className}
    block={block}
    small={small}
    disabled={disabled}
  >
    <SecondaryBtn
      className={`${className} secondaryButton`}
      block={block}
      small={small}
      disabled={disabled}
      {...defaultProps}
    >
      {children}
    </SecondaryBtn>
  </SecondaryContainer>
);

type Props = {
  children: React$Node,
  className: string,
  block: boolean,
  small: boolean,
  disabled: boolean,
}

export default SecondaryButton;
