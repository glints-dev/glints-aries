import * as React from 'react';
import { VerticalCenteredSvg } from './IconStyle';

export const iconSizeMap = {
  xxs: '12px',
  xs: '16px',
  s: '24px',
  m: '32px',
  l: '48px',
  xl: '64px',
  xxl: '96px',
  xxxl: '128px',
};

const Icon: React.FunctionComponent<Props> = props => {
  const {
    className,
    children,
    color = 'currentColor',
    width = '1em',
    height = '1em',
    onClick,
    size,
    ...restProps
  } = props;

  return (
    <VerticalCenteredSvg
      data-testid="icon-svg"
      className={className}
      width={iconSizeMap[size] || width}
      height={iconSizeMap[size] || height}
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
  size?: keyof typeof iconSizeMap;
  onClick?(e: React.MouseEvent<SVGSVGElement, MouseEvent>): void;
}

export default Icon;
