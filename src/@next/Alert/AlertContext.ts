import { createContext } from 'react';
import { AlertProps } from './Alert';

export type showAlertProps = Omit<AlertProps, 'show'>;

export type AlertContextProps = AlertProps & {
  showAlert: (props: showAlertProps) => void;
  closeAlert: () => void;
};
export const AlertContext = createContext<AlertContextProps | undefined>(
  undefined
);
