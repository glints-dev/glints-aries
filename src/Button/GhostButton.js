import React from 'react';
import { GhostBtn } from '../Style/ButtonStyle';

type Props = {
  theme: string,
  onClick: Function,
  children: React.Node,
  className: string
}

const GhostButton = ({ children, ...defaultButtonProps }: Props) => (
  <GhostBtn {...defaultButtonProps}>
    {children}
  </GhostBtn>
);

export default GhostButton;
