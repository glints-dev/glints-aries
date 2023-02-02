import React from 'react';
import { Button, PrimaryButton } from '../Button';
import { ButtonGroup } from '../ButtonGroup';
import { Icon } from '../Icon';
import { Portal } from '../Portal/Portal';
import { Typography } from '../Typography';
import {
  StyledModalWrapper,
  StyledModalContainer,
  StyledModalHeader,
  StyledModalContent,
  StyledModalCloseButton,
  StyledModalActions,
} from './ModalStyle';

export type ModalAction = {
  label: string;
  action: (...args: any[]) => void;
};

const modalSizes = ['default', 'small', 'large'] as const;

export type ModalSize = typeof modalSizes[number];

export type ModalProps = {
  isOpen?: boolean;
  size?: ModalSize;
  header?: React.ReactNode;
  children?: React.ReactNode;
  primaryAction?: ModalAction;
  secondaryAction?: ModalAction;
  customActions?: React.ReactNode;
  onClose?: () => void;
};

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  function Modal(
    {
      isOpen,
      header,
      children,
      secondaryAction,
      primaryAction,
      customActions,
      size = 'default',
      onClose,
    }: ModalProps,
    ref
  ) {
    if (!isOpen) {
      return null;
    }

    if (!modalSizes.includes(size)) {
      console.warn(
        `Size "${size}" is not a valid Modal size, default will be used instead`
      );
      size = 'default';
    }

    const defaultActionContent = (
      <ButtonGroup>
        {secondaryAction && (
          <Button onClick={() => secondaryAction.action?.()}>
            {secondaryAction.label}
          </Button>
        )}
        {primaryAction && (
          <PrimaryButton onClick={() => primaryAction.action?.()}>
            {primaryAction.label}
          </PrimaryButton>
        )}
      </ButtonGroup>
    );

    const actionsContent = customActions ? customActions : defaultActionContent;

    const hasActions = !!customActions || !!primaryAction || !!secondaryAction;

    const content =
      typeof children === 'string' ? (
        <Typography as="div" variant="body1">
          {children}
        </Typography>
      ) : (
        children
      );

    return (
      <Portal>
        <StyledModalWrapper>
          <StyledModalContainer ref={ref} data-size={size}>
            {header && (
              <StyledModalHeader>
                <Typography as="div" variant="subtitle1">
                  {header}
                </Typography>
                <StyledModalCloseButton
                  data-testid="modal-close-btn"
                  onClick={() => onClose?.()}
                >
                  <Icon name="ri-close" />
                </StyledModalCloseButton>
              </StyledModalHeader>
            )}
            <StyledModalContent>{content}</StyledModalContent>
            {hasActions && (
              <StyledModalActions>{actionsContent}</StyledModalActions>
            )}
          </StyledModalContainer>
        </StyledModalWrapper>
      </Portal>
    );
  }
);
