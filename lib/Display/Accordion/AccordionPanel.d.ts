import * as React from 'react';
import { IconOptions } from './Accordion';
import { PanelWrapper } from './AccordionStyle';
declare const AccordionPanel: React.FunctionComponent<Props>;
export declare type Props = React.ComponentPropsWithoutRef<typeof PanelWrapper> & {
    content: React.ReactNode;
    label: React.ReactNode;
    active?: boolean;
    iconOptions?: IconOptions;
    onOpen?(): void;
    onClick?(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
};
export default AccordionPanel;
