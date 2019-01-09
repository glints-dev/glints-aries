/* @flow */

import React from 'react';
import { SwipeableContainer } from '../../Style/Display/SwipeableStyle';

const Swipeable = (props: Props) => {
  const {
    children,
    className,
  } = props;

  return (
    <SwipeableContainer id="aries-swipeable" className={className}>
      { children }
    </SwipeableContainer>
  );
};

type Props = {
  children: React$Node,
  className: string,
};

export default Swipeable;
