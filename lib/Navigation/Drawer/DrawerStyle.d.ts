import { DrawerPosition } from './Drawer';
export declare const DrawerContainer: import("styled-components").StyledComponent<"div", any, DrawerContainerProps, never>;
interface DrawerContainerProps {
    open: boolean;
}
export declare const DrawerWrapper: import("styled-components").StyledComponent<"div", any, DrawerWrapperProps, never>;
interface DrawerWrapperProps {
    open: boolean;
    position: DrawerPosition;
}
export {};
