interface ButtonProps {
    small?: boolean;
}
interface SolidBtnContainerProps {
    block?: boolean;
    disabled?: boolean;
    isRoundedCorner?: boolean;
}
interface SolidBtnProps {
    block?: boolean;
    isRoundedCorner?: boolean;
}
export declare const SolidBtn: import("styled-components").StyledComponent<"button", any, ButtonProps & SolidBtnProps, never>;
export declare const SolidBtnContainer: import("styled-components").StyledComponent<"div", any, SolidBtnContainerProps, never>;
interface SolidShadowBtnProps {
    block?: boolean;
}
export declare const SolidShadowBtn: import("styled-components").StyledComponent<"button", any, ButtonProps & SolidShadowBtnProps, never>;
interface SolidShadowContainerProps {
    block?: boolean;
    disabled?: boolean;
}
export declare const SolidShadowContainer: import("styled-components").StyledComponent<"div", any, SolidShadowContainerProps, never>;
interface GhostBtnProps {
    block?: boolean;
    isRoundedCorner?: boolean;
}
export declare const GhostBtn: import("styled-components").StyledComponent<"button", any, ButtonProps & GhostBtnProps, never>;
interface GhostBtnContainerProps {
    block?: boolean;
    disabled?: boolean;
    isRoundedCorner?: boolean;
}
export declare const GhostBtnContainer: import("styled-components").StyledComponent<"div", any, GhostBtnContainerProps, never>;
interface WhiteGreyBtnProps {
    block?: boolean;
    isRoundedCorner?: boolean;
}
export declare const WhiteGreyBtn: import("styled-components").StyledComponent<"button", any, ButtonProps & WhiteGreyBtnProps, never>;
export declare const LinkBtn: import("styled-components").StyledComponent<"button", any, ButtonProps & LinkBtnProps, never>;
interface LinkBtnProps {
    block?: boolean;
    disabled?: boolean;
}
export declare const StartIconContainer: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const EndIconContainer: import("styled-components").StyledComponent<"span", any, {}, never>;
export {};
