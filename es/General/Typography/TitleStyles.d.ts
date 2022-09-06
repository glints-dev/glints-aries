import { tagType } from './Title';
export declare const TITLE_VARIANTS: {
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
};
export declare const TITLE_FONT_SIZES: {
    [x: string]: number;
};
interface TitleProps {
    as: tagType;
    color?: string;
    ellipsis?: boolean;
    uppercase?: boolean;
}
export declare const Title: import("styled-components").StyledComponent<"h1", any, TitleProps, never>;
export {};
