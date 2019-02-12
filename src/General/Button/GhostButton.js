/* @flow */

import React from 'react';
import { GhostBtnContainer, GhostBtn } from '../../Style/General/ButtonStyle';

const GhostButton = ({
  children,
  className,
  theme,
  disabled,
  block,
  small,
  removeHoverEffect,
  ...defaultProps
}: Props) => (
  <GhostBtnContainer
    id="aries-ghostbtn"
    className={className}
    theme={theme}
    disabled={disabled}
    block={block}
    small={small}
    removeHoverEffect={removeHoverEffect}
  >
    <GhostBtn
      id="ghostbtn-content"
      theme={theme}
      disabled={disabled}
      block={block}
      small={small}
      {...defaultProps}
    >
      {children}
    </GhostBtn>
  </GhostBtnContainer>
);

type Props = {
  children: React$Node,
  className: string,
  theme: string,
  disabled: boolean,
  block: boolean,
  small: boolean,
}

export default GhostButton;
