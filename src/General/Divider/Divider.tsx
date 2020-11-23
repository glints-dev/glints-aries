import * as React from 'react';
import classNames from 'classnames';
import { DividerContainer } from './DividerStyle';

export const Divider: React.FC<Props> = ({
  theme = 'default',
  className,
  style,
}) => {
  return (
    <DividerContainer
      className={classNames('aries-divider', className)}
      style={style}
      theme={theme}
    />
  );
};

export type Theme = 'red' | 'blue' | 'yellow' | 'white' | 'grey' | 'default';

export interface Props {
  theme?: Theme;
  /** Can be used to change the divider height. */
  className?: string;
  style?: React.CSSProperties;
}

export default Divider;
