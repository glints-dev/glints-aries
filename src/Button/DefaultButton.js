import React from 'react';
import { DefaultBtn } from '../Style/ButtonStyle';

type Props = {
  theme: string,
  onClick: Function,
  children: React.Node,
  className: string
}

const DefaultButton = ({ children, ...defaultButtonProps }: Props) => (
  <DefaultBtn {...defaultButtonProps}>
    { children }
  </DefaultBtn>
);

export default DefaultButton;
