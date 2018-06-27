/* @flow */

import React, { Fragment } from 'react';
import { Origin } from './../Style/BlockquoteStyle';

const OriginSection = (props: Props) => {
  const {
    children,
  } = props;

  return (
    <Origin>{children}</Origin>
  );
}

type Props = {
  children: React$Node,
}
  
export default OriginSection;