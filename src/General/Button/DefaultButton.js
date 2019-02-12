/* @flow */

import React from 'react';
import { DefaultBtnContainer, DefaultBtn } from '../../Style/General/ButtonStyle';

const DefaultButton = ({
  children,
  className,
  theme,
  disabled,
  block,
  small,
  removeHoverEffect,
  ...defaultProps
}: Props) => (
  <DefaultBtnContainer
    id="aries-defaultbtn"
    className={className}
    theme={theme}
    disabled={disabled}
    block={block}
    small={small}
    removeHoverEffect={removeHoverEffect}
  >
    <DefaultBtn
      id="defaultbtn-content"
      theme={theme}
      disabled={disabled}
      block={block}
      small={small}
      {...defaultProps}
    >
      {children}
    </DefaultBtn>
  </DefaultBtnContainer>
);

type Props = {
  children: React$Node,
  className: string,
  theme: string,
  disabled: boolean,
  block: boolean,
  small: boolean,
}

export default DefaultButton;
