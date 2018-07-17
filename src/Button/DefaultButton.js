/* @flow */

import React from 'react';
import { DefaultBtn } from '../Style/ButtonStyle';

const DefaultButton = ({ children, ...defaultButtonProps }: Props) => (
  <DefaultBtn {...defaultButtonProps}>
    { children }
  </DefaultBtn>
);

type Props = {
  theme: string,
  onClick: Function,
  children: React$Node,
  className: string,
}

export default DefaultButton;
