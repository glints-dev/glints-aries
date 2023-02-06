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
  StyledModalActions,
  StyledButtonContainer,
  StyledModalCloseButton,
  StyledModalBackButton,
} from './ModalStyle';

export type ModalAction = {
  label: string;
  action: (...args: any[]) => void;
};

export type ModalProps = {
  isOpen?: boolean;
  header?: string;
  headerDescription?: string;
  children?: React.ReactNode;
  primaryAction?: ModalAction;
  secondaryAction?: ModalAction;
  customActions?: React.ReactNode;
  showBackButton?: boolean;
  showCloseButton?: boolean;
  showHeaderBorder?: boolean;
  closeOnClickOutside?: boolean;
  onClose?: () => void;
  onBack?: () => void;
};

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  function Modal(
    {
      isOpen,
      header,
      headerDescription,
      children,
      secondaryAction,
      primaryAction,
      customActions,
      showBackButton,
      showCloseButton = true,
      showHeaderBorder = true,
      closeOnClickOutside,
      onClose,
      onBack,
    }: ModalProps,
    ref
  ) {
    if (!isOpen) {
      return null;
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

    const handleClickOutside = () => {
      if (closeOnClickOutside) {
        onClose?.();
      }
    };

    return (
      <Portal>
        <StyledModalWrapper
          data-testid="modal-wrapper"
          onClick={() => handleClickOutside()}
        >
          <StyledModalContainer ref={ref} onClick={e => e.stopPropagation()}>
            {header && (
              <StyledModalHeader data-show-border={showHeaderBorder}>
                {showBackButton && (
                  <StyledButtonContainer>
                    <StyledModalBackButton
                      data-testid="modal-back-btn"
                      data-has-decription={!!headerDescription}
                      onClick={() => onBack?.()}
                    >
                      <Icon name="ri-arrow-left-line" />
                    </StyledModalBackButton>
                  </StyledButtonContainer>
                )}
                <Typography as="div" variant="subtitle1">
                  {header}
                  <Typography as="div" variant="body1">
                    {headerDescription}
                  </Typography>
                </Typography>
                {showCloseButton && (
                  <StyledButtonContainer>
                    <StyledModalCloseButton
                      data-testid="modal-close-btn"
                      data-has-decription={!!headerDescription}
                      onClick={() => onClose?.()}
                    >
                      <Icon name="ri-close" />
                    </StyledModalCloseButton>
                  </StyledButtonContainer>
                )}
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
