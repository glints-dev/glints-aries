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
import { ComponentAction } from '../../types/componentAction';

type CommonProps = {
  basicButtonAction?: ComponentAction;
  primaryButtonAction?: ComponentAction;
  description?: React.ReactNode;
  fullWidth?: boolean;
  helpText?: string;
  title?: string;
};

export type EmptyStateProps = CommonProps &
  (
    | {
        /** will soon be @deprecated. Please use image prop instead */
        imageName?: ImageName;
      }
    | {
        /** Renders an image based on ImageName or a custom image */
        image?: ImageName | React.ReactNode;
      }
  );

export const EmptyState = ({
  basicButtonAction,
  primaryButtonAction,
  description,
  fullWidth = true,
  helpText,
  title,
  ...props
}: EmptyStateProps) => {
  const displayButtons = !!primaryButtonAction || !!basicButtonAction;
  const imageName = 'imageName' in props ? props.imageName : undefined;
  const image = 'image' in props ? props.image : undefined;

  if (imageName) {
    console.warn(
      'imageName will soon be deprecated. Please use image prop instead'
    );

    if (!imageNames.includes(imageName)) {
      console.warn(`image "${imageName}" is not a valid Image Name.`);
    }
  }

  if (typeof image === 'string' && !imageNames.includes(imageName)) {
    console.warn(`image "${imageName}" is not a valid Image Name.`);
  }

  const renderImage = () => {
    if (imageName || typeof image === 'string') {
      const imageString = imageName ? imageName : (image as ImageName);
      return (
        <StyledImage
          src={imageMapping[imageString]}
          className="empty-state-image"
        />
      );
    }

    return image;
  };

  return (
    <EmptyStateContainer>
      {renderImage()}
      <EmptyStateContentContainer data-full-width={fullWidth}>
        {title && (
          <StyledTitle
            variant="subtitle1"
            color={Neutral.B18}
            className="empty-state-title"
          >
            {title}
          </StyledTitle>
        )}
        {description && (
          <StyledDescription
            variant="body1"
            color={Neutral.B40}
            className="empty-state-description"
          >
            {description}
          </StyledDescription>
        )}
        {displayButtons && (
          <StyledButtonGroup>
            {primaryButtonAction && (
              <PrimaryButton
                {...primaryButtonAction}
                loading={primaryButtonAction?.loading}
                onClick={primaryButtonAction?.onClick}
                className="empty-state-primary-button"
              >
                {primaryButtonAction?.label}
              </PrimaryButton>
            )}
            {basicButtonAction && (
              <Button
                {...basicButtonAction}
                loading={basicButtonAction?.loading}
                onClick={basicButtonAction.onClick}
                className="empty-state-basic-button"
              >
                {basicButtonAction?.label}
              </Button>
            )}
          </StyledButtonGroup>
        )}
        {helpText && (
          <StyledHelpText
            variant="subtitle2"
            color={Neutral.B40}
            className="empty-state-help-text"
          >
            {helpText}
          </StyledHelpText>
        )}
      </EmptyStateContentContainer>
    </EmptyStateContainer>
  );
};
