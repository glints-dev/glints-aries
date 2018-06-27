/* @flow */

import React from 'react';
import { StyledTestimony } from './../Style/BlockquoteStyle';

const Testimony = (props: Props) => {
  const {
    children,
  } = props;
  
  return (
    <StyledTestimony>{children}</StyledTestimony>
  );
}

type Props = {
  children: React$Node,
}

export default Testimony;