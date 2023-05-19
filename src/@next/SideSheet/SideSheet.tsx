import React from 'react';
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
  StyledSideSheetContent,
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
  leftButtonAction?: ComponentAction;
  rightButtonAction?: ComponentAction;
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
      leftButtonAction,
      rightButtonAction,
      showBackButton = true,
      onBack,
      showCloseButton = true,
      onClose,
      ...props
    }: SideSheetProps,
    ref
  ) {
    return (
      <>
        {isOpen && (
          <Portal>
            <StyledSideSheetWrapper>
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
                      <StyledButtonContainer onClick={onClose}>
                        <Icon name="ri-close" />
                      </StyledButtonContainer>
                    </StyledRightContainer>
                  )}
                </StyledSideSheetHeader>
                {showHorizontalLine && <StyledHorizontalLine />}
                <StyledSideSheetContent>{children}</StyledSideSheetContent>
                <StyledSideSheetFooter>
                  <StyledHorizontalLine />
                  <StyledButtonGroupContainer>
                    <ButtonGroup fullWidth>
                      {leftButtonAction && (
                        <Button
                          onClick={leftButtonAction.action}
                          fullWidth={true}
                        >
                          {leftButtonAction.label}
                        </Button>
                      )}
                      {rightButtonAction && (
                        <PrimaryButton onClick={rightButtonAction.action}>
                          {rightButtonAction.label}
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
