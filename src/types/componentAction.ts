import { ReactNode } from 'react';
import { ButtonProps } from '../@next';

export type ComponentAction = ButtonProps & {
  label: ReactNode;
  action: (...args: any[]) => void;
};
