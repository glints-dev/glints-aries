import React, { useEffect, useRef, useState } from 'react';
import { ComponentAction } from '../../types/componentAction';
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
  StyledModalLeftAndRightComponent,
} from './ModalStyle';

type LeftAndRightComponentModalProps =
  | {
      leftComponent: React.ReactNode;
      rightComponent: React.ReactNode;
    }
  | {
      leftComponent?: never;
      rightComponent?: never;
    };

export type ModalProps = React.HTMLAttributes<HTMLDivElement> &
  LeftAndRightComponentModalProps & {
    isOpen?: boolean;
    header?: React.ReactNode;
    headerDescription?: React.ReactNode;
    children?: React.ReactNode;
    /** This action will be tied to primary button on footer */
    primaryAction?: ComponentAction;
    /** This action will be tied to basic button on footer */
    secondaryAction?: ComponentAction;
    /** Defining custom actions will not show primary and secondary actions */
    customActions?: React.ReactNode;
    showBackButton?: boolean;
    showCloseButton?: boolean;
    /** Use this if you don't want to see the header border bottom */
    showHeaderBorder?: boolean;
    /** Setting this to true will close modal when clicking outside of Modal body */
    closeOnClickOutside?: boolean;
    onClose?: () => void;
    onBack?: () => void;
    zIndexOverride?: number;
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
      zIndexOverride = 999,
      leftComponent,
      rightComponent,
      ...props
    }: ModalProps,
    ref
  ) {
    const [isContentHasScrollbar, setIsContentHasScrollbar] =
      useState<boolean>(false);
    const modalContentRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
      const checkScrollbar = () => {
        const modalContent = modalContentRef.current;
        if (modalContent) {
          setIsContentHasScrollbar(
            modalContent.scrollHeight > modalContent.clientHeight
          );
        }
      };
      checkScrollbar();
      const handleResize = () => checkScrollbar();
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    });

    useEffect(() => {
      if (typeof window === 'undefined' || !window.document) return;

      const enableScroll = () => {
        document.body.style.overflow = 'unset';
      };

      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        enableScroll();
      }

      return () => {
        enableScroll();
      };
    }, [isOpen]);

    if (!isOpen) {
      return null;
    }

    const defaultActionContent = (
      <ButtonGroup>
        {secondaryAction && (
          <Button
            onClick={() => secondaryAction.action?.()}
            {...secondaryAction}
          >
            {secondaryAction.label}
          </Button>
        )}
        {primaryAction && (
          <PrimaryButton
            onClick={() => primaryAction.action?.()}
            {...primaryAction}
          >
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
          zIndexOverride={zIndexOverride}
        >
          {leftComponent && (
            <StyledModalLeftAndRightComponent className="modal-left-component">
              {leftComponent}
            </StyledModalLeftAndRightComponent>
          )}
          <StyledModalContainer
            ref={ref}
            onClick={e => e.stopPropagation()}
            {...props}
          >
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
            <StyledModalContent
              className="modal-content"
              ref={modalContentRef}
              data-has-scrollbar={isContentHasScrollbar}
            >
              {content}
            </StyledModalContent>
            {hasActions && (
              <StyledModalActions>{actionsContent}</StyledModalActions>
            )}
          </StyledModalContainer>
          {rightComponent && (
            <StyledModalLeftAndRightComponent className="modal-right-component">
              {rightComponent}
            </StyledModalLeftAndRightComponent>
          )}
        </StyledModalWrapper>
      </Portal>
    );
  }
);
