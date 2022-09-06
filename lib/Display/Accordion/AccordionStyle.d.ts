import { IconPosition } from './Accordion';
export declare const PanelWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Container: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const IconLabelWrapper: import("styled-components").StyledComponent<"div", any, IconLabelWrapper, never>;
interface IconLabelWrapper {
    active: boolean;
    position: IconPosition;
}
export declare const ContentWrapper: import("styled-components").StyledComponent<"div", any, ContentWrapper, never>;
interface ContentWrapper {
    active: boolean;
}
export declare const Content: import("styled-components").StyledComponent<"div", any, Content, never>;
interface Content {
    position: IconPosition;
}
export declare const Label: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const IconWrapper: import("styled-components").StyledComponent<"div", any, IconWrapper, never>;
interface IconWrapper {
    active: boolean;
    position: IconPosition;
}
export {};
