import * as React from 'react';
import { VerticalCenteredSvg } from './IconStyle';

const Icon: React.FunctionComponent<Props> = props => {
  const {
    className,
    children,
    color = 'currentColor',
    width = '1em',
    height = '1em',
    onClick,
    size = 's',
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
      fontSize={size}
      viewBox="0 0 100 100"
      {...restProps}
    >
      {children}
    </VerticalCenteredSvg>
  );
};

export type iconSizeType =
  | 'xxs'
  | 'xs'
  | 's'
  | 'm'
  | 'l'
  | 'xl'
  | 'xxl'
  | 'xxxl';

export interface Props {
  className?: string;
  children: React.ReactNode;
  color?: string;
  width?: string | number;
  height?: string | number;
  size?: iconSizeType;
  onClick?(e: React.MouseEvent<SVGSVGElement, MouseEvent>): void;
}

export default Icon;
