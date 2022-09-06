import * as React from 'react';
declare const Gallery: ({ initialVisibility, children, imagesDisplayed, }: Props) => JSX.Element;
export interface Props {
    children?: React.ReactNode;
    /** How many thumbnails the (unopened) gallery should show */
    imagesDisplayed?: number;
    /** If true, the Gallery will open itself on mount */
    initialVisibility?: boolean;
}
export default Gallery;
