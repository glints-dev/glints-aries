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

export const imageNames = [
  'empty-carton',
  'empty-mailbox',
  'safety-cone',
] as const;

export type ImageName = typeof imageNames[number];

// const imageMapping: Record<ImageName, string> = {
//   'empty-carton': emptyCartonImage,
//   'empty-mailbox': emptyMailboxImage,
//   'safety-cone': safetyConeImage,
// };

const imageMapping: Record<ImageName, string> = {
  'empty-carton': 'emptyCarton',
  'empty-mailbox': 'emptyMailbox',
  'safety-cone': 'safetyCone',
};

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
  const [image, setImage] = useState(null);

  const isValidImageName = imageNames.includes(imageName);
  if (imageName && !isValidImageName) {
    console.warn(`imageName "${imageName}" is not a valid Image Name.`);
  }

  useEffect(() => {
    const loadImage = async () => {
      const img = await import(`./assets/${imageMapping[imageName]}.js`);
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
