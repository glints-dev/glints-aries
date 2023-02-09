import React, { useEffect, useState } from 'react';
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

export const imageName = ['empty-carton', 'empty-mailbox', 'safety-cone'];
export type ImageName = typeof imageName[number];
export interface EmptyStateProps {
  buttonBasicContent?: React.ReactNode;
  buttonBasicLoading?: boolean;
  buttonBasicOnClick?: React.MouseEventHandler<HTMLButtonElement>;
  buttonPrimaryContent?: React.ReactNode;
  buttonPrimaryLoading?: boolean;
  buttonPrimaryOnClick?: React.MouseEventHandler<HTMLButtonElement>;
  description?: string;
  fullWidth?: boolean;
  helpText?: string;
  imageName?: ImageName;
  title?: string;
}

export const EmptyState = ({
  buttonBasicContent,
  buttonBasicLoading,
  buttonBasicOnClick,
  buttonPrimaryContent,
  buttonPrimaryLoading,
  buttonPrimaryOnClick,
  description,
  fullWidth = true,
  helpText,
  imageName,
  title,
}: EmptyStateProps) => {
  const showPrimaryButton = !!buttonPrimaryContent;
  const showBasicButton = !!buttonBasicContent;
  const displayButtons = showPrimaryButton || showBasicButton;
  const [image, setImage] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      const img = await import(`./assets/${imageName}.png`);
      setImage(img.default);
    };

    loadImage();
  }, [imageName]);

  return (
    <EmptyStateContainer>
      {imageName && <StyledImage src={image} />}
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
              <PrimaryButton
                loading={buttonPrimaryLoading}
                onClick={buttonPrimaryOnClick}
              >
                {buttonPrimaryContent}
              </PrimaryButton>
            )}
            {showBasicButton && (
              <Button loading={buttonBasicLoading} onClick={buttonBasicOnClick}>
                {buttonBasicContent}
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
