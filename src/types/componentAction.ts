import { ReactElement } from 'react';
import { ButtonProps } from '../@next';

export type ComponentAction = ButtonProps & {
  label: ReactElement;
  action: (...args: any[]) => void;
};
