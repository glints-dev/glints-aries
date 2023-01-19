import React from 'react';
import { DividerStyle } from './DividerStyle';

export type DividerProps = React.HTMLAttributes<HTMLDivElement>;

export const Divider = ({ ...props }: DividerProps) => (
  <DividerStyle {...props} />
);
