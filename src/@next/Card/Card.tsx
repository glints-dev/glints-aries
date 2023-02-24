import React from 'react';
import { ComponentAction } from '../../types/componentAction';
import { Button, PrimaryButton } from '../Button';
import { ButtonGroup } from '../ButtonGroup';
import { Typography } from '../Typography';
import {
  StyledCardActionWrapper,
  StyledCardContainer,
  StyledCardContentWrapper,
  StyledCardHeaderSection,
  StyledCardHeaderSectionHalf,
  StyledCardHeaderWrapper,
  StyledCustomHeader,
} from './CardStyle';
import { Section } from './Section';

const PRIMITIVE_TYPES = ['string', 'number'];

export type CardProps = {
  heading?: React.ReactNode;
  subheading?: React.ReactNode;
  children?: React.ReactNode;
  primaryAction?: ComponentAction;
  secondaryAction?: ComponentAction;
  actionsAlignment?: 'left' | 'right';
};

const CardComponent = React.forwardRef<HTMLDivElement, CardProps>(function Card(
  {
    heading,
    subheading,
    primaryAction,
    secondaryAction,
    actionsAlignment = 'right',
    children,
  }: CardProps,
  ref
) {
  const headingMarkup = PRIMITIVE_TYPES.includes(typeof heading) ? (
    <Typography as="div" variant="body2">
      {heading}
    </Typography>
  ) : (
    <StyledCustomHeader>{heading}</StyledCustomHeader>
  );

  const subHeadingMarkup = PRIMITIVE_TYPES.includes(typeof subheading) ? (
    <Typography as="div" variant="subtitle2">
      {subheading}
    </Typography>
  ) : (
    <StyledCustomHeader>{subheading}</StyledCustomHeader>
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
        <StyledCardHeaderWrapper>{headerMarkup()} </StyledCardHeaderWrapper>
      )}
      <StyledCardContentWrapper>{children}</StyledCardContentWrapper>
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
