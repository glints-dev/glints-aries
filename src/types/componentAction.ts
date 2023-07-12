import { ButtonProps } from '../@next';

export type ComponentAction = ButtonProps & {
  label: string;
  action: (...args: any[]) => void;
};
