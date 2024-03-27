import { createContext } from 'react';
import { ComponentWithProviderProps } from '../../types/componentWithProvider';
import { ModalProps } from './Modal';

export type ShowModalProps = Exclude<ModalProps, 'isOpen'>;
export type ModalContextProps = ModalProps &
  ComponentWithProviderProps<ShowModalProps>;

export const ModalContext = createContext<ModalContextProps | undefined>(
  undefined
);
