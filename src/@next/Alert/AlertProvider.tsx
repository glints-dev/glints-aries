import React, { useState } from 'react';
import { AlertProps } from './Alert';
import { AlertContext, showAlertProps } from './AlertContext';

export const AlertProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<AlertProps>(undefined);

  const showAlert = (props: showAlertProps) =>
    setState({ ...props, show: true });

  const closeAlert = () => setState({ show: false });

  const alertContextValue = { ...state, showAlert, closeAlert };

  return (
    <AlertContext.Provider value={alertContextValue}>
      {children}
    </AlertContext.Provider>
  );
};
