import React, { useState } from 'react';
import { ModalProps } from './Modal';
import { ModalContext, ShowModalProps } from './ModalContext';

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<ModalProps>({ isOpen: false });

  const open = (props: ShowModalProps) => setState({ ...props, isOpen: true });

  const close = () => setState({ isOpen: false });

  const modalContextValue = { ...state, open, close };

  return (
    <ModalContext.Provider value={modalContextValue}>
      {children}
    </ModalContext.Provider>
  );
};
