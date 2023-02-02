import React, { useState } from 'react';
import { AlertProps } from './Alert';
import { AlertContext, ShowAlertProps } from './AlertContext';

export const AlertProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<AlertProps>(undefined);

  const open = (props: ShowAlertProps) => setState({ ...props, show: true });

  const close = () => setState({ show: false });

  const alertContextValue = { ...state, open, close };

  return (
    <AlertContext.Provider value={alertContextValue}>
      {children}
    </AlertContext.Provider>
  );
};
