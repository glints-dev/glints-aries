import { Props } from './Modal';
export declare const SIZES: {
    [s: string]: number;
};
interface InnerProps extends Omit<Props, 'isVisible'> {
    isOpen: boolean;
}
export declare const ModalContainer: import("styled-components").StyledComponent<"div", any, InnerProps, never>;
export declare const ModalDialog: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ModalHeader: import("styled-components").StyledComponent<"header", any, {}, never>;
export declare const ModalBody: import("styled-components").StyledComponent<"section", any, ModalBodyProps, never>;
interface ModalBodyProps {
    hideContentArea: boolean;
    centering: boolean;
}
export declare const ModalFooter: import("styled-components").StyledComponent<"footer", any, {
    isChildrenInMultiLines: boolean;
}, never>;
export declare const ModalContentArea: import("styled-components").StyledComponent<"div", any, InnerProps, never>;
export {};
