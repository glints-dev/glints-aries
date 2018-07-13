/* @flow */
import React from 'react';
import { SwipeableContainer } from '../Style/SwipeableStyle';

const Swipeable = (props: Props) => {
  const { children } = props;

  return (
    <SwipeableContainer>
        { children }
    </SwipeableContainer>
  );
}

export default Swipeable;
