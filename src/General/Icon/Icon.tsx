import * as React from 'react';

const Icon: React.FunctionComponent<Props> = props => {
  const {
    className,
    children,
    color,
    width = '1em',
    height = '1em',
    onClick,
    ...restProps
  } = props;

  return (
    <svg
      className={className}
      width={width}
      height={height}
      onClick={onClick}
      fill={color}
      viewBox="0 0 100 100"
      {...restProps}
    >
      {children}
    </svg>
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
