export declare const DropdownWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const DropdownContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const DropdownHeader: import("styled-components").StyledComponent<"div", any, DropdownHeaderProps, never>;
interface DropdownHeaderProps {
    disabled?: boolean;
    isOpen?: boolean;
    showFullWidth?: boolean;
    showHoverLine?: boolean;
    iconDefaultColor?: string;
}
export declare const DropdownBody: import("styled-components").StyledComponent<"ul", any, DropdownBodyProps, never>;
interface DropdownBodyProps {
    open?: boolean;
    noLineBreak?: boolean;
    dropDownPlacement?: 'left' | 'right';
    showFullWidth?: boolean;
    showHoverLine?: boolean;
}
export declare const DropdownItemWrapper: import("styled-components").StyledComponent<"li", any, DropdownItemWrapperProps, never>;
interface DropdownItemWrapperProps {
    showFullWidth?: boolean;
}
export declare const IconWrapper: import("styled-components").StyledComponent<"span", any, IconWrapperProps, never>;
interface IconWrapperProps {
    isOpen: boolean;
}
export {};
