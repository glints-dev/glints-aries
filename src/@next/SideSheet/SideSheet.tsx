import React, { useEffect } from 'react';
import { Button, PrimaryButton } from '../Button';
import { ButtonGroup } from '../ButtonGroup';
import { ComponentAction } from '../../types/componentAction';
import { Icon } from '../Icon';
import { Portal } from '../Portal/Portal';
import {
  StyledSideSheetContainer,
  StyledSideSheetWrapper,
  StyledSideSheetHeader,
  StyledButtonContainer,
  StyledRightContainer,
  StyledHorizontalLine,
  StyledSideSheetFooter,
  StyledButtonGroupContainer,
} from './SideSheetStyle';
import { Typography } from '../Typography';

export interface SideSheetProps {
  isOpen: boolean;
  title: string;
  description?: string;
  showHorizontalLine?: boolean;
  children?: React.ReactNode;
  basicButtonAction?: ComponentAction;
  primaryButtonAction?: ComponentAction;
  showBackButton?: boolean;
  onBack?: () => void;
  showCloseButton?: boolean;
  onClose?: () => void;
}

const SideSheet = React.forwardRef<HTMLDivElement, SideSheetProps>(
  function SideSheet(
    {
      isOpen,
      title,
      description,
      showHorizontalLine = true,
      children,
      basicButtonAction,
      primaryButtonAction,
      showBackButton = true,
      onBack,
      showCloseButton = true,
      onClose,
      ...props
    }: SideSheetProps,
    ref
  ) {
    useEffect(() => {
      if (typeof window === 'undefined' || !window.document) return;
      const enableScroll = () => (document.body.style.overflow = 'unset');
      isOpen ? (document.body.style.overflow = 'hidden') : enableScroll();
      return () => {
        enableScroll();
      };
    }, [isOpen]);

    // fade out effect for 0.2seconds when closed
    const handleClose = () => {
      const containerDiv = document.getElementById(
        'side-sheet-container-unique'
      );
      let opacity = 1;
      const interval = setInterval(function () {
        if (opacity > 0) {
          containerDiv.style.opacity = `${(opacity -= 0.05)}`;
        } else {
          clearInterval(interval);
          onClose();
        }
      }, 10);
    };

    return (
      <>
        {isOpen && (
          <Portal>
            <StyledSideSheetWrapper
              id="side-sheet-container-unique"
              onClick={() => handleClose()}
            >
              <StyledSideSheetContainer
                ref={ref}
                onClick={e => e.stopPropagation()}
                {...props}
              >
                <StyledSideSheetHeader>
                  {showBackButton && (
                    <StyledButtonContainer onClick={onBack}>
                      <Icon name="ri-arrow-left-line" />
                    </StyledButtonContainer>
                  )}
                  <Typography as="div" variant="subtitle1">
                    {title}
                    <Typography as="div" variant="body1">
                      {description}
                    </Typography>
                  </Typography>
                  {showCloseButton && (
                    <StyledRightContainer>
                      <StyledButtonContainer onClick={handleClose}>
                        <Icon name="ri-close" />
                      </StyledButtonContainer>
                    </StyledRightContainer>
                  )}
                </StyledSideSheetHeader>
                {showHorizontalLine && <StyledHorizontalLine />}
                {children}
                <StyledSideSheetFooter>
                  <StyledHorizontalLine />
                  <StyledButtonGroupContainer>
                    <ButtonGroup fullWidth>
                      {basicButtonAction && (
                        <Button
                          onClick={basicButtonAction.action}
                          fullWidth={true}
                        >
                          {basicButtonAction.label}
                        </Button>
                      )}
                      {primaryButtonAction && (
                        <PrimaryButton onClick={primaryButtonAction.action}>
                          {primaryButtonAction.label}
                        </PrimaryButton>
                      )}
                    </ButtonGroup>
                  </StyledButtonGroupContainer>
                </StyledSideSheetFooter>
              </StyledSideSheetContainer>
            </StyledSideSheetWrapper>
          </Portal>
        )}
      </>
    );
  }
);

export { SideSheet };
