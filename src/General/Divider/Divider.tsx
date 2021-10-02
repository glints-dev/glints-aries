import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { DividerContainer } from './DividerStyle';

/**
 * Use className or style to change the divider's
 * height
 */
export const Divider: FC<Props> = ({
  theme = 'default',
  className,
  ...props
}) => {
  return (
    <DividerContainer
      {...props}
      className={classNames('aries-divider', className)}
      theme={theme}
    />
  );
};

export type Theme = 'red' | 'blue' | 'yellow' | 'white' | 'grey' | 'default';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  theme?: Theme;
}

export default Divider;
