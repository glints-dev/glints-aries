import React from 'react';
import { Modal } from './Modal';
import { useModal } from './useModal';

export const ModalWithProvider = () => {
  const { close: closeModal, onClose, ...rest } = useModal();
  const { isOpen, ...modalProps } = rest;

  if (!isOpen) {
    return null;
  }

  return (
    <Modal
      {...modalProps}
      isOpen={isOpen}
      onClose={() => {
        closeModal();
        onClose?.();
      }}
    />
  );
};
