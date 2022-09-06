import * as React from 'react';
declare const Drawer: ({ children, isOpen, onClose, position, getContainerElement, ...defaultProps }: Props) => JSX.Element;
export declare type DrawerPosition = 'left' | 'right';
export interface Props {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    getContainerElement?: () => HTMLElement;
    position?: DrawerPosition;
}
export default Drawer;
