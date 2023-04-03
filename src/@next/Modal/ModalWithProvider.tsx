import React from 'react';
import { Modal } from './Modal';
import { useModal } from './useModal';

export const ModalWithProvider = () => {
  const { close, onClose, ...rest } = useModal();
  const { isOpen, ...modalProps } = rest;

  return (
    <Modal
      {...modalProps}
      isOpen={isOpen}
      onClose={() => {
        close();
        onClose?.();
      }}
    />
  );
};
