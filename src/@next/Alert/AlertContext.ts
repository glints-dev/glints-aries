import { createContext } from 'react';
import { ComponentWithProviderProps } from '../../types/componentWithProvider';
import { AlertProps } from './Alert';

export type ShowAlertProps = Omit<AlertProps, 'show'>;

export type AlertContextProps = AlertProps &
  ComponentWithProviderProps<ShowAlertProps>;
export const AlertContext = createContext<
  AlertContextProps | Record<string, never>
>({});
