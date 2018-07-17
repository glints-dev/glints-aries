/* @flow */

import React from 'react';
import { StyledTestimony } from './../Style/BlockquoteStyle';

const Testimony = (props: Props) => {
  const {
    children,
    className
  } = props;
  
  return (
    <StyledTestimony className={className}>
      {children}
    </StyledTestimony>
  );
}

type Props = {
  children: React$Node,
  className: string,
}

export default Testimony;