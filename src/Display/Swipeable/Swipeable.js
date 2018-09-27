/* @flow */

import React from 'react';
import { SwipeableContainer } from '../../Style/SwipeableStyle';

const Swipeable = (props: Props) => {
  const {
    children,
    className,
  } = props;

  return (
    <SwipeableContainer className={className}>
      { children }
    </SwipeableContainer>
  );
};

type Props = {
  children: React$Node,
  className: string,
};

export default Swipeable;
