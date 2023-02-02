import { useContext } from 'react';
import { ModalContext } from './ModalContext';

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error(
      'No ModalContext was provided via "ModalProvider", to use this hooks you must provide them in your app root.'
    );
  }
  return context;
};
