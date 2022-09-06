import * as React from 'react';
declare const RightArrow: React.FunctionComponent<Props>;
interface Props {
    index: number;
    limit: number;
    nextSlide: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    arrowWhite: boolean;
    renderRightIcon?: (disabled: boolean) => React.ReactElement;
}
export default RightArrow;
