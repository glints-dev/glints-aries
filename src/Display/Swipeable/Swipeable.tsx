import * as React from 'react';
import classNames from 'classnames';
import { SwipeableContainer } from './SwipeableStyle';

import SwipeableItem from './SwipeableItem';

/** You can add any number of  <Swipeable.Item />  components as children of the Swipeable component, controlling the behavior of an individual swipeable item.  */
export const Swipeable: SwipeableType = ({ children, className }) => (
  <SwipeableContainer className={classNames('aries-swipeable', className)}>
    {children}
  </SwipeableContainer>
);

type SwipeableType = React.FunctionComponent<Props> & {
  Item: typeof SwipeableItem;
};

Swipeable.Item = SwipeableItem;

export interface Props {
  children: React.ReactNode;
  className?: string;
}

export default Swipeable;
