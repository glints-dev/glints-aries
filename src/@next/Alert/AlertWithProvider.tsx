import React from 'react';
import { Alert } from './Alert';
import { useAlert } from './useAlert';

export const AlertWithProvider = React.forwardRef<HTMLDivElement, unknown>(
  function AlertWithProvider(_, alertRef) {
    const { close, onDismissed, ...rest } = useAlert();
    const { show, ...alertProps } = rest;

    if (!show) {
      return null;
    }

    return (
      <Alert
        ref={alertRef}
        {...alertProps}
        show={show}
        onDismissed={() => {
          close();
          onDismissed?.();
        }}
      />
    );
  }
);
