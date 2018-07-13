/* @flow */

import React from 'react';
import { SwipeableWrapper } from '../Style/SwipeableStyle';

const SwipeableItem = (props: Props) => {
  const { children } = props;

  return (
    <SwipeableWrapper>
        { children }
    </SwipeableWrapper>
  );
}

type Props = {
  children: React$Node,
}

export default SwipeableItem;
