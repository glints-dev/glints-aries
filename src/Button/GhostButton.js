/* @flow */

import React from 'react';
import Loading from '../Loading';
import { GhostBtn } from '../Style/ButtonStyle';

const GhostButton = ({ children, loading, ...defaultProps }: Props) => (
  <GhostBtn {...defaultProps}>
    {loading
      && <Loading className="loader" size="small" />
    }
    {children}
  </GhostBtn>
);

type Props = {
  theme: string,
  onClick: Function,
  children: React$Node,
  className: string,
  loading: boolean,
}

export default GhostButton;
