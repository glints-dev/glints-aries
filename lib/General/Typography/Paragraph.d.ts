import * as React from 'react';
import { ParagraphProps } from './ParagraphStyles';
export declare const Paragraph: React.FunctionComponent<Props>;
export interface Props extends ParagraphProps {
    className?: string;
    children: React.ReactNode;
    shouldSetLineHeight?: boolean;
}
export default Paragraph;
