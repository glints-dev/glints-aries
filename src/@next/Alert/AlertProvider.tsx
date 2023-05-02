import React, { useCallback, useState } from 'react';
import { AlertProps } from './Alert';
import { AlertContext, ShowAlertProps } from './AlertContext';

export const AlertProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<AlertProps>({ show: false });

  const open = useCallback(
    (props: ShowAlertProps) => setState({ ...props, show: true }),
    [setState]
  );

  const close = useCallback(() => setState({ show: false }), [setState]);

  const alertContextValue = { ...state, open, close };

  return (
    <AlertContext.Provider value={alertContextValue}>
      {children}
    </AlertContext.Provider>
  );
};
