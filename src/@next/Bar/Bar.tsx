import React from 'react';
import { Breakpoints, Colors } from '..';
import { ComponentAction } from '../../types/componentAction';
import { Button, PrimaryButton } from '../Button';
import { ButtonGroup } from '../ButtonGroup';
import { Typography } from '../Typography';
import {
  StyledBarActionWrapper,
  StyledBar,
  StyledBarHeaderWrapper,
  StyledBarContainer,
} from './BarStyle';
import { useWindowSize } from './useWindowSize';

export type BarProps = {
  heading: React.ReactNode;
  subheading?: React.ReactNode;
  primaryAction: ComponentAction;
  secondaryAction?: ComponentAction;
  tertiaryAction?: ComponentAction;
  position?: 'top' | 'bottom';
};

export const Bar = React.forwardRef<HTMLDivElement, BarProps>(function Bar(
  {
    heading,
    subheading,
    primaryAction,
    secondaryAction,
    tertiaryAction,
    position,
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

  return (
    <StyledBar data-align={position} ref={ref}>
      <StyledBarContainer>
        <StyledBarHeaderWrapper>{headerMarkup()} </StyledBarHeaderWrapper>
        <StyledBarActionWrapper>
          <ButtonGroup>
            {tertiaryAction && (
              <Button onClick={tertiaryAction.action} size={buttonSize}>
                {tertiaryAction.label}
              </Button>
            )}
            {secondaryAction && (
              <Button onClick={secondaryAction.action} size={buttonSize}>
                {secondaryAction.label}
              </Button>
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
