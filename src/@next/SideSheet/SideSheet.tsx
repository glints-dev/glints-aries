import React, { useEffect, useState, useRef, MouseEvent } from 'react';
import { Button, PrimaryButton } from '../Button';
import { ButtonGroup } from '../ButtonGroup';
import { ComponentAction } from '../../types/componentAction';
import { Icon } from '../Icon';
import { Neutral } from '../utilities/colors';
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

    // store state for closing animation, and cleanup when unmounting
    const [isClosedAnimation, setIsClosedAnimation] = useState(false);
    const timeoutId = useRef(null);
    useEffect(() => {
      return () => {
        if (timeoutId.current) {
          clearTimeout(timeoutId.current);
        }
      };
    }, []);

    // fade out effect for 0.2seconds when closed
    const handleClose = () => {
      setIsClosedAnimation(true);
      timeoutId.current = setTimeout(() => {
        setIsClosedAnimation(false);
        onClose();
      }, 190); // purposefully made this 0.19sec (to prevent rare animation glitch)
    };

    return (
      <>
        {isOpen && (
          <Portal>
            <StyledSideSheetWrapper
              className={`side-sheet-wrapper ${
                isClosedAnimation ? 'closed' : ''
              }`}
              onClick={handleClose}
            >
              <StyledSideSheetContainer
                className={`${isClosedAnimation ? 'closed' : ''}`}
                ref={ref}
                onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
                {...props}
              >
                <StyledSideSheetHeader>
                  {showBackButton && (
                    <StyledButtonContainer onClick={onBack}>
                      <Icon name="ri-arrow-left-line" />
                    </StyledButtonContainer>
                  )}
                  <Typography
                    as="div"
                    variant="subtitle1"
                    style={{ color: Neutral.B18 }}
                  >
                    {title}
                    <Typography
                      as="div"
                      variant="body1"
                      style={{ color: Neutral.B18 }}
                    >
                      {description}
                    </Typography>
                  </Typography>
                  {showCloseButton && (
                    <StyledRightContainer>
                      <StyledButtonContainer
                        data-testid="sidesheet-close-btn"
                        onClick={handleClose}
                      >
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
