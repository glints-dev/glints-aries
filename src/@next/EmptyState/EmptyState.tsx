import React from 'react';
import { Button, PrimaryButton } from '../Button';
import { Neutral } from '../utilities/colors';
import { imageMapping, ImageName, imageNames } from './assets/assets';
import {
  EmptyStateContainer,
  EmptyStateContentContainer,
  StyledButtonGroup,
  StyledDescription,
  StyledHelpText,
  StyledImage,
  StyledTitle,
} from './EmptyStateStyle';

export type ButtonAction = {
  label: string;
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
export interface EmptyStateProps {
  basicButtonAction?: ButtonAction;
  primaryButtonAction?: ButtonAction;
  description?: string;
  fullWidth?: boolean;
  helpText?: string;
  imageName?: ImageName;
  title?: string;
}

export const EmptyState = ({
  basicButtonAction,
  primaryButtonAction,
  description,
  fullWidth = true,
  helpText,
  imageName,
  title,
}: EmptyStateProps) => {
  const displayButtons = !!primaryButtonAction || !!basicButtonAction;

  const isValidImageName = imageNames.includes(imageName);
  if (imageName && !isValidImageName) {
    console.warn(`imageName "${imageName}" is not a valid Image Name.`);
  }

  console.log('ImageName: ', imageName);

  return (
    <EmptyStateContainer>
      {imageName && <StyledImage src={imageMapping[imageName]} />}
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
            {primaryButtonAction && (
              <PrimaryButton
                loading={primaryButtonAction?.loading}
                onClick={primaryButtonAction?.onClick}
              >
                {primaryButtonAction?.label}
              </PrimaryButton>
            )}
            {basicButtonAction && (
              <Button
                loading={basicButtonAction?.loading}
                onClick={basicButtonAction.onClick}
              >
                {basicButtonAction?.label}
              </Button>
            )}
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
