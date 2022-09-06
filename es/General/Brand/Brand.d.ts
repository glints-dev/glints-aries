import * as React from 'react';
import { BrandContainer } from './BrandStyle';
declare const Brand: ({ alt, asset, className, rightClickURL, onContextMenu, ...defaultProps }: Props) => JSX.Element;
export declare type Props = React.ComponentPropsWithoutRef<typeof BrandContainer> & {
    /** There are 3 available values for asset props. The first and second one are Glints logo, but you can also custom the logo by parsing url or path of the logo. */
    asset: string;
    /** HTML <img> alt Attribute */
    alt?: HTMLImageElement['alt'];
    className?: string;
    /** Redirect to url when right click is triggered. */
    rightClickURL?: string;
    /** Executes when the user right-clicks on the component */
    onContextMenu?(): void;
};
export default Brand;
