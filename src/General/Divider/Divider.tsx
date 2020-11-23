import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { DividerContainer } from './DividerStyle';

export const Divider: FC<Props> = ({ theme = 'default', className, style }) => {
  return (
    <DividerContainer
      className={classNames('aries-divider', className)}
      style={style}
      theme={theme}
    />
  );
};

export type Theme = 'red' | 'blue' | 'yellow' | 'white' | 'grey' | 'default';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  theme?: Theme;
}

export default Divider;
