import * as React from 'react';
declare const Tag: React.FunctionComponent<Props>;
interface BasicTagProps {
    /** Set Tag into block style. */
    block?: boolean;
    /** Set Tag into outline style. */
    outline?: boolean;
}
interface ButtonTagProps {
    icon?: React.ReactNode;
}
export declare type TagActionType = 'add' | 'reset';
interface ActionTagProps {
    /** (Only for tags with variant=action). Chooses which kind of action the tag will indicate. */
    action?: TagActionType;
    /** A function triggered when icon or action tag is clicked. */
    onClick?(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
}
export declare type TagVariantType = 'button' | 'action';
export interface Props extends BasicTagProps, ButtonTagProps, ActionTagProps {
    children: React.ReactNode;
    /** button tags usually show a single piece of information, while action tags are elements in a list (e.g. a list of selected options). */
    variant?: TagVariantType;
}
export default Tag;
