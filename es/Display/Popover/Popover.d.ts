import * as React from 'react';
declare const Popover: ({ className, children, content }: Props) => JSX.Element;
export interface Props {
    className?: string;
    children: React.ReactNode;
    /** The content to be displayed when the child element is clicked */
    content: React.ReactNode;
}
export default Popover;
