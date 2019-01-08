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
    id="aries-secondarybtn"
    className={className}
    block={block}
    small={small}
    disabled={disabled}
  >
    <SecondaryBtn
      id="secondarybtn-content"
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
