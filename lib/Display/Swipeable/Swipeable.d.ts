import * as React from 'react';
import SwipeableItem from './SwipeableItem';
/** You can add any number of  <Swipeable.Item />  components as children of the Swipeable component, controlling the behavior of an individual swipeable item.  */
export declare const Swipeable: Swipeable;
declare type Swipeable = React.FunctionComponent<Props> & {
    Item: typeof SwipeableItem;
};
export interface Props {
    children: React.ReactNode;
    className?: string;
}
export default Swipeable;
