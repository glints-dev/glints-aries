import React from 'react';
import { Breakpoints, Colors } from '..';
import { ComponentAction } from '../../types/componentAction';
import { Button, PrimaryButton } from '../Button';
import { ButtonGroup } from '../ButtonGroup';
import { Icon } from '../Icon';
import { Typography } from '../Typography';
import {
  StyledBarActionWrapper,
  StyledBar,
  StyledBarHeaderWrapper,
  StyledBarContainer,
  StyledButtonContainer,
} from './BarStyle';
import { useWindowSize } from './useWindowSize';

export type BarProps = {
  heading: React.ReactNode;
  subheading?: React.ReactNode;
  primaryAction: ComponentAction;
  secondaryAction?: ComponentAction;
  tertiaryAction?: ComponentAction;
  position?: 'top' | 'bottom';
  smallScreen?: boolean;
  showBackButton?: boolean;
  onBack?: () => void;
  // array of 2 numbers (in pixels)
  // index 0: horizontal distance from primary to secondary button
  // index 1: horizontal distance from secondary to tertiary button
  buttonSpacing?: number[];
};

export const Bar = React.forwardRef<HTMLDivElement, BarProps>(function Bar(
  {
    heading,
    subheading,
    primaryAction,
    secondaryAction,
    tertiaryAction,
    position,
    showBackButton = false,
    onBack,
    buttonSpacing = [8, 8],
  }: BarProps,
  ref
) {
  const headerMarkup = () => {
    if (subheading) {
      return (
        <>
          <Typography as="div" variant="body2" color={Colors.Neutral.B18}>
            {heading}
          </Typography>
          <Typography as="div" variant="subtitle2" color={Colors.Neutral.B40}>
            {subheading}
          </Typography>
        </>
      );
    }
    return (
      <Typography as="div" variant="headline6" color={Colors.Neutral.B18}>
        {heading}
      </Typography>
    );
  };
  const { width } = useWindowSize();
  const breakpointWidth = parseInt(Breakpoints.large.slice(0, -2));
  const buttonSize: 'default' | 'large' =
    width <= breakpointWidth ? 'default' : 'large';
  const smallScreen: boolean = width <= breakpointWidth ? true : false;

  return (
    <StyledBar data-align={position} ref={ref} smallScreen={smallScreen}>
      <StyledBarContainer smallScreen={smallScreen}>
        {showBackButton && (
          <StyledButtonContainer onClick={onBack} smallScreen={smallScreen}>
            <Icon name="ri-arrow-left-line" />
          </StyledButtonContainer>
        )}
        <StyledBarHeaderWrapper>{headerMarkup()} </StyledBarHeaderWrapper>
        <StyledBarActionWrapper>
          <ButtonGroup>
            {tertiaryAction && (
              <Button onClick={tertiaryAction.action} size={buttonSize}>
                {tertiaryAction.label}
              </Button>
            )}
            {buttonSpacing[1] && (
              <div style={{ marginRight: buttonSpacing[1] - 16 }}></div>
            )}
            {secondaryAction && (
              <Button onClick={secondaryAction.action} size={buttonSize}>
                {secondaryAction.label}
              </Button>
            )}
            {buttonSpacing[0] && (
              <div style={{ marginRight: buttonSpacing[0] - 16 }}></div>
            )}
            <PrimaryButton onClick={primaryAction.action} size={buttonSize}>
              {primaryAction.label}
            </PrimaryButton>
          </ButtonGroup>
        </StyledBarActionWrapper>
      </StyledBarContainer>
    </StyledBar>
  );
});
