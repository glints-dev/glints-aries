import React from 'react';
import { Button, PrimaryButton } from '../Button';
import { Neutral } from '../utilities/colors';
import {
  EmptyStateContainer,
  EmptyStateContentContainer,
  StyledButtonGroup,
  StyledDescription,
  StyledHelpText,
  StyledImage,
  StyledTitle,
} from './EmptyStateStyle';

const imageName = ['empty-carton', 'empty-mailbox', 'safety-cone'];
export type ImageName = typeof imageName[number];
export interface EmptyStateProps {
  buttonBasicContent?: React.ReactNode;
  buttonPrimaryContent?: React.ReactNode;
  description?: string;
  fullWidth?: boolean;
  helpText?: string;
  imageName?: ImageName;
  title?: string;
}

export const EmptyState = ({
  buttonBasicContent,
  buttonPrimaryContent,
  description,
  fullWidth = true,
  helpText,
  imageName,
  title,
}: EmptyStateProps) => {
  const showPrimaryButton = !!buttonPrimaryContent;
  const showBasicButton = !!buttonBasicContent;
  const displayButtons = showPrimaryButton || showBasicButton;
  return (
    <EmptyStateContainer>
      {imageName && (
        <StyledImage src={require(`../../../assets/image/${imageName}.png`)} />
      )}
      <EmptyStateContentContainer data-full-width={fullWidth}>
        {title && (
          <StyledTitle variant="subtitle1" color={Neutral.B18}>
            {title}
          </StyledTitle>
        )}
        {description && (
          <StyledDescription variant="body1" color={Neutral.B40}>
            {description}
          </StyledDescription>
        )}
        {displayButtons && (
          <StyledButtonGroup>
            {showPrimaryButton && (
              <PrimaryButton>{buttonPrimaryContent}</PrimaryButton>
            )}
            {showBasicButton && <Button>{buttonBasicContent}</Button>}
          </StyledButtonGroup>
        )}
        {helpText && (
          <StyledHelpText variant="subtitle2" color={Neutral.B40}>
            {helpText}
          </StyledHelpText>
        )}
      </EmptyStateContentContainer>
    </EmptyStateContainer>
  );
};
