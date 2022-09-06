import * as React from 'react';
import { SwipeableItemWrapper } from './SwipeableStyle';
declare const SwipeableItem: React.FunctionComponent<Props>;
declare type Props = React.ComponentPropsWithoutRef<typeof SwipeableItemWrapper> & {
    children: React.ReactNode;
};
export default SwipeableItem;
