import * as React from 'react';
import TabPane from './TabPane';
export declare const Tabs: Tabs;
export declare type Alignment = 'horizontal' | 'vertical';
export declare type Theme = 'blue' | 'black';
export interface Props {
    children: React.ReactNode;
    /** Sets alignment of Tab. The vertical tabs are changed to horizontal ones for screen size below 768 */
    alignment?: Alignment;
    /** Sets the theme for the tabs */
    theme?: Theme;
    /** Controls the currently active tab (index) */
    activeTab?: string | number;
    /** Called when a tab gets clicked. Called with the index of the tab. */
    onTabClick?(tab: React.ReactText | React.ReactNode): void;
    className?: string;
}
declare type Tabs = React.FunctionComponent<Props> & {
    Pane: typeof TabPane;
};
export default Tabs;
