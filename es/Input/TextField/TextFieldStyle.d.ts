export declare const IconContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const StartIconContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const EndIconContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const TextFieldContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const TextFieldLabel: import("styled-components").StyledComponent<"label", any, TextFieldLabelProps, never>;
declare type statusType = 'success' | 'error';
interface TextFieldLabelProps {
    small: boolean;
    floating: boolean;
    status: statusType;
    hasStartIcon?: boolean;
}
export declare const TextFieldInput: import("styled-components").StyledComponent<"input", any, TextFieldInputProps, never>;
export interface TextFieldInputProps {
    small?: boolean;
    status?: statusType;
    disableTyping?: boolean;
    floating?: boolean;
    hasStartIcon?: boolean;
}
export {};
