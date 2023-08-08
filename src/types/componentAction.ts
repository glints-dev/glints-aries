import { ReactNode } from 'react';
import { ButtonProps } from '../@next';

export type ComponentAction = ButtonProps & {
  label: ReactNode;
  /** action will soon be @deprecated. please use onClick instead */
  action?: (...args: any[]) => void;
};
