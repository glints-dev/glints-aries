/* @flow */

import React from 'react';
import { SwipeableWrapper } from '../../Style/Display/SwipeableStyle';

const SwipeableItem = (props: Props) => {
  const {
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <SwipeableWrapper className={className} {...defaultProps}>
      { children }
    </SwipeableWrapper>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default SwipeableItem;
