import * as React from 'react';
import Title from './Title';
import Paragraph from './Paragraph';
declare const Typography: Typography;
declare type Typography = React.FunctionComponent<Props> & {
    Title: typeof Title;
    Paragraph: typeof Paragraph;
};
interface Props {
    children: React.ReactNode;
}
export default Typography;
