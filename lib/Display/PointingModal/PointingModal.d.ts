import * as React from 'react';
import { PointingModalContainer } from './PointingModalStyle';
import PointingModalHeader from './PointingModalHeader';
import PointingModalBody from './PointingModalBody';
import PointingModalItem from './PointingModalItem';
import PointingModalFooter from './PointingModalFooter';
declare const PointingModal: PointingModal;
declare type PointingModal = React.FunctionComponent<Props> & {
    Header: typeof PointingModalHeader;
    Body: typeof PointingModalBody;
    Item: typeof PointingModalItem;
    Footer: typeof PointingModalFooter;
};
export declare type Props = React.ComponentPropsWithoutRef<typeof PointingModalContainer> & {
    children: React.ReactNode;
};
export default PointingModal;
