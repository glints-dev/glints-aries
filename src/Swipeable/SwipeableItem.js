/* @flow */

import React from 'react';
import { SwipeableWrapper } from '../Style/SwipeableStyle';

const SwipeableItem = (props: Props) => {
  const { 
    children, 
    className 
  } = props;

  return (
    <SwipeableWrapper className={className}>
        { children }
    </SwipeableWrapper>
  );
}

type Props = {
  children: React$Node,
  className: string,
}

export default SwipeableItem;
