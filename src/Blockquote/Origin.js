/* @flow */

import React, { Fragment } from 'react';
import { StyledOrigin } from './../Style/BlockquoteStyle';

const Origin = (props: Props) => {
  const {
    children,
  } = props;

  return (
    <StyledOrigin>{children}</StyledOrigin>
  );
}

type Props = {
  children: React$Node,
}
  
export default Origin;
