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

export type ModalProps = {
  isOpen?: boolean;
  size?: 'default' | 'small' | 'large';
  header?: React.ReactNode;
  children?: React.ReactNode;
  primaryAction?: ModalAction;
  secondaryAction?: ModalAction;
  customActions?: React.ReactNode;
  onClose?: () => void;
};

export const Modal = ({
  isOpen,
  header,
  children,
  secondaryAction,
  primaryAction,
  customActions,
}: ModalProps) => {
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

  return (
    <Portal>
      <StyledModalWrapper>
        <StyledModalContainer>
          <StyledModalHeader>
            <Typography as="div" variant="subtitle1">
              {header}
            </Typography>
            <StyledModalCloseButton>
              <Icon name="ri-close" />
            </StyledModalCloseButton>
          </StyledModalHeader>
          <div>
            <StyledModalContent>
              <Typography as="div" variant="body1">
                {children}
              </Typography>
            </StyledModalContent>
          </div>
          {hasActions && (
            <StyledModalActions>{actionsContent}</StyledModalActions>
          )}
        </StyledModalContainer>
      </StyledModalWrapper>
    </Portal>
  );
};
