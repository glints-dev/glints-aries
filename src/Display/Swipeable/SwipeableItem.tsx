import * as React from 'react';
import classNames from 'classnames';
import { SwipeableItemWrapper } from './SwipeableStyle';

const SwipeableItem: React.FunctionComponent<Props> = props => {
  const { children, className, ...defaultProps } = props;

  return (
    <SwipeableItemWrapper
      className={classNames('swipeable-itemwrapper', className)}
      {...defaultProps}
    >
      {children}
    </SwipeableItemWrapper>
  );
};

type Props = React.ComponentPropsWithoutRef<typeof SwipeableItemWrapper> & {
  children: React.ReactNode;
};

export default SwipeableItem;
