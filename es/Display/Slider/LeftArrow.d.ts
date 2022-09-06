import * as React from 'react';
declare const LeftArrow: (props: Props) => JSX.Element;
interface Props {
    index: number;
    previousSlide: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    arrowWhite: boolean;
    renderLeftIcon?: (disabled: boolean) => React.ReactElement;
}
export default LeftArrow;
