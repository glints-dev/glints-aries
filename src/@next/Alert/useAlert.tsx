import { useContext } from 'react';
import { AlertContext } from './AlertContext';

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error(
      'No AlertContext was provided via "AlertProvider", to use this hooks you must provide them in your app root.'
    );
  }
  return context;
};
