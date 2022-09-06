export declare const PARAGRAPH_VARIANTS: {
    subtitle: string;
    regular: string;
    caption: string;
    smallest: string;
};
export declare const PARAGRAPH_FONT_SIZES: {
    [x: string]: number;
};
export declare const PARAGRAPH_LINE_HEIGHTS: {
    [x: string]: number;
};
export declare type paragraphType = 'subtitle' | 'regular' | 'caption' | 'smallest';
export interface ParagraphProps {
    /** Sets the Paragraph's font-weight to bold */
    bold?: boolean;
    /** Sets the Paragraph's color */
    color?: string;
    /** Display ellipsis when the title overflows */
    ellipsis?: boolean;
    /** Sets the Paragraph's variant */
    variant?: paragraphType;
    /** Adds a line-height value to the paragraph */
    shouldSetLineHeight?: boolean;
}
export declare const Paragraph: import("styled-components").StyledComponent<"p", any, ParagraphProps, never>;
