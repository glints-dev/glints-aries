import React from 'react';
export declare const ColorSampler: import("styled-components").StyledComponent<"div", any, {}, never>;
export interface ColorBoxProps {
    bgColor: string;
    fontColor: string;
}
export interface ColorSampleProps extends ColorBoxProps {
    name: string;
}
export declare const ColorSample: React.FunctionComponent<ColorSampleProps>;
