import React from 'react';
import { Alert } from './Alert';
import { useAlert } from './useAlert';

export const AlertWithProvider = () => {
  const { closeAlert, ...rest } = useAlert();
  const { show, ...alertProps } = rest;

  if (!show) {
    return null;
  }

  return <Alert {...alertProps} show={show} onDismissed={() => closeAlert()} />;
};
