import React from 'react';
import { ComponentAction } from '../../types/componentAction';
import { Button, PrimaryButton } from '../Button';
import { DestructivePlainButton } from '../Button/DestructivePlainButtonStyle';
import { PlainButton } from '../Button/PlainButtonStyle';
import { ButtonGroup } from '../ButtonGroup';
import { Typography } from '../Typography';
import {
  StyledCardActionWrapper,
  StyledCardContainer,
  StyledCardContentWrapper,
  StyledCardHeaderLeftContainer,
  StyledCardHeaderRightContainer,
  StyledCardHeaderSection,
  StyledCardHeaderSectionHalf,
  StyledCardHeaderWrapper,
} from './CardStyle';
import { Section } from './Section';

export type CardProps = {
  heading?: React.ReactNode;
  subheading?: React.ReactNode;
  children?: React.ReactNode;
  primaryAction?: ComponentAction;
  secondaryAction?: ComponentAction;
  headerPrimaryAction?: ComponentAction;
  headerSecondaryAction?: ComponentAction;
  actionsAlignment?: 'left' | 'right';
};

const CardComponent = React.forwardRef<HTMLDivElement, CardProps>(function Card(
  {
    heading,
    subheading,
    primaryAction,
    secondaryAction,
    headerPrimaryAction,
    headerSecondaryAction,
    actionsAlignment = 'right',
    children,
  }: CardProps,
  ref
) {
  const headingMarkup = (
    <Typography as="div" variant="subtitle1">
      {heading}
    </Typography>
  );

  const subHeadingMarkup = (
    <Typography as="div" variant="subtitle2">
      {subheading}
    </Typography>
  );

  const headerMarkup = () => {
    if (!!heading && !!subheading) {
      return (
        <>
          <StyledCardHeaderSectionHalf>
            {headingMarkup}
          </StyledCardHeaderSectionHalf>
          <StyledCardHeaderSectionHalf>
            {subHeadingMarkup}
          </StyledCardHeaderSectionHalf>
        </>
      );
    }

    if (heading) {
      return <StyledCardHeaderSection>{headingMarkup}</StyledCardHeaderSection>;
    }

    return (
      <StyledCardHeaderSection>{subHeadingMarkup}</StyledCardHeaderSection>
    );
  };

  const showHeader = !!heading || !!subheading;
  const showActions = !!primaryAction || !!secondaryAction;

  return (
    <StyledCardContainer ref={ref}>
      {showHeader && (
        <StyledCardHeaderWrapper>
          <StyledCardHeaderLeftContainer>
            {headerMarkup()}
          </StyledCardHeaderLeftContainer>
          <StyledCardHeaderRightContainer>
            <ButtonGroup fullWidth={false} isButtonWrapped={true}>
              {headerSecondaryAction && (
                <DestructivePlainButton
                  onClick={headerSecondaryAction.action}
                  size="verySlim"
                >
                  {headerSecondaryAction.label}
                </DestructivePlainButton>
              )}
              {headerPrimaryAction && (
                <PlainButton
                  onClick={headerPrimaryAction.action}
                  size="verySlim"
                >
                  {headerPrimaryAction.label}
                </PlainButton>
              )}
            </ButtonGroup>
          </StyledCardHeaderRightContainer>
        </StyledCardHeaderWrapper>
      )}
      <StyledCardContentWrapper data-actions={showActions}>
        {children}
      </StyledCardContentWrapper>
      {showActions && (
        <StyledCardActionWrapper data-align={actionsAlignment}>
          <ButtonGroup>
            {secondaryAction && (
              <Button onClick={secondaryAction.action}>
                {secondaryAction.label}
              </Button>
            )}
            {primaryAction && (
              <PrimaryButton onClick={primaryAction.action}>
                {primaryAction.label}
              </PrimaryButton>
            )}
          </ButtonGroup>
        </StyledCardActionWrapper>
      )}
    </StyledCardContainer>
  );
});

export const Card = Object.assign(CardComponent, { Section: Section });
