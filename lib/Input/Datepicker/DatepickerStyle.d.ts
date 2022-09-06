export declare const DatepickerContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const DatepickerWrapper: import("styled-components").StyledComponent<"div", any, DatepickerWrapperProps, never>;
interface DatepickerWrapperProps {
    isOpen: boolean;
}
export declare const DatepickerSection: import("styled-components").StyledComponent<"div", any, DatepickerSectionProps, never>;
interface DatepickerSectionProps {
    border?: boolean;
}
export declare const DatepickerContent: import("styled-components").StyledComponent<"div", any, DatepickerContentProps, never>;
interface DatepickerContentProps {
    justify?: string;
}
export declare const DatepickerMonthYearBtn: import("styled-components").StyledComponent<"button", any, {}, never>;
export declare const DatepickerTodayBtn: import("styled-components").StyledComponent<"button", any, {}, never>;
export declare const DatepickerNavigation: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const DatepickerIconWrapper: import("styled-components").StyledComponent<"div", any, DatepickerIconWrapperProps, never>;
interface DatepickerIconWrapperProps {
    needMargin?: boolean;
}
export declare const DatepickerTable: import("styled-components").StyledComponent<"table", any, {}, never>;
export declare const Td: import("styled-components").StyledComponent<"td", any, {}, never>;
export declare const Th: import("styled-components").StyledComponent<"th", any, {}, never>;
export declare const HoverContent: import("styled-components").StyledComponent<"div", any, HoverContentProps, never>;
interface HoverContentProps {
    biggerSize?: boolean;
    currentActiveDate?: string;
    index?: string;
    hoverAble?: boolean;
}
export {};
