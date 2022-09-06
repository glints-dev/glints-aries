import * as React from 'react';
export declare const Slider: {
    ({ afterChange, children, autoplay, initialItem, className, fullContent, arrowWhite, removeDots, renderLeftIcon, renderRightIcon, containerRef, }: Props): JSX.Element;
    Item: React.FunctionComponent<import("./SliderItem").Props>;
};
export interface Props {
    children: React.ReactNode;
    className?: string;
    /** The index of the page that will be shown initally (before the first manual- or auto-scroll). Note that the index starts at 1. */
    initialItem?: number;
    /** If true, the dot controls will be superimposed on the current page */
    fullContent?: boolean;
    /** If true, the arrow controls will have a white color */
    arrowWhite?: boolean;
    /** If true, dot controls will be removed */
    removeDots?: boolean;
    /** Sets the left icon. Receives the "disabled" flag as an argument. */
    renderLeftIcon?: (disabled: boolean) => React.ReactElement;
    /** Sets the right icon. Receives the "disabled" flag as an argument. */
    renderRightIcon?: (disabled: boolean) => React.ReactElement;
    /** Called with the new index after a new Slider page has been shown */
    afterChange?: (index: number) => void;
    /** If true, the Slider will flip through its pages at a regular interval */
    autoplay?: boolean;
    containerRef?: React.RefObject<HTMLDivElement>;
}
export default Slider;
