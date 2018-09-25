/* @flow */

import React from 'react';
import { GhostBtn } from '../../Style/ButtonStyle';

const GhostButton = ({ children, ...defaultProps }: Props) => (
  <GhostBtn {...defaultProps}>
    {children}
  </GhostBtn>
);

type Props = {
  children: React$Node,
  className: string,
}

export default GhostButton;
