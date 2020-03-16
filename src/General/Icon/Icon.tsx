import * as React from 'react';
import { VerticalCenteredSvg } from '../../Style/General/IconStyle';

const Icon: React.FunctionComponent<Props> = props => {
  const {
    className,
    children,
    color = 'currentColor',
    width = '1em',
    height = '1em',
    onClick,
    ...restProps
  } = props;

  return (
    <VerticalCenteredSvg
      data-testid="icon-svg"
      className={className}
      width={width}
      height={height}
      onClick={onClick}
      fill={color}
      viewBox="0 0 100 100"
      {...restProps}
    >
      {children}
    </VerticalCenteredSvg>
  );
};

export interface Props {
  className?: string;
  children: React.ReactNode;
  color?: string;
  width?: string | number;
  height?: string | number;
  onClick?(e: React.MouseEvent<SVGSVGElement, MouseEvent>): void;
}

export default Icon;
