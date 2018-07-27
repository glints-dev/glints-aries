/* @flow */

import React from 'react';
import { StyledOrigin } from '../Style/BlockquoteStyle';

const Origin = (props: Props) => {
  const {
    children,
    className,
  } = props;

  return (
    <StyledOrigin className={className}>
      {children}
    </StyledOrigin>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default Origin;
