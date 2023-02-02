import React from 'react';
import { DividerStyle } from './DividerStyle';

export type DividerProps = React.HTMLAttributes<HTMLDivElement>;

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  function Divider(props: DividerProps, ref) {
    return <DividerStyle ref={ref} {...props} />;
  }
);
