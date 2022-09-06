import * as React from 'react';
import AccordionPanel from './AccordionPanel';
declare const Accordion: Accordion;
declare type Accordion = React.FunctionComponent<Props> & {
    Panel: typeof AccordionPanel;
};
export declare type IconPosition = 'left' | 'right';
export interface IconOptions {
    activeIcon: React.ReactElement;
    inactiveIcon: React.ReactElement;
    position: IconPosition;
}
export interface Props {
    children: React.ReactNode;
    className?: string;
    /** Sets the position of the icon. */
    iconPosition?: IconPosition;
}
export default Accordion;
