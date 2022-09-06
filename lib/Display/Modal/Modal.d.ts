import { HTMLAttributes, FC, ReactNode, ReactElement } from 'react';
export declare const Modal: FC<Props>;
export declare type sizeType = 's' | 'm' | 'l' | 'xl';
export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    /** Sets title of Modal. */
    title?: ReactNode;
    /** Sets the visibility of Modal. */
    isVisible: boolean;
    /** Sets to close Modal. */
    onClose?(): void;
    /** An array containing 0-2 elements. */
    footer?: ReactElement[];
    /** Centering Modal. */
    centering?: boolean;
    /** Make modal cover the user viewport */
    fullscreen?: boolean;
    /** Removes animation when opening and closing the modal. */
    removeAnimation?: boolean;
    /** Sets size of Modal. */
    size?: sizeType;
    /** Hides header area. */
    hideHeader?: boolean;
    /** Hides content area. */
    hideContentArea?: boolean;
    /** Whether to keep the child in the DOM when the modal is close */
    keepChildrenMountedOnClose?: boolean;
}
export default Modal;
