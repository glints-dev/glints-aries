import React from 'react';
import { Button, PrimaryButton } from '../Button';
import { ButtonGroup } from '../ButtonGroup';
import { Typography } from '../Typography';
import { Neutral } from '../utilities/colors';
import {
  EmptyStateContainer,
  EmptyStateContentContainer,
  StyledImage,
} from './EmptyStateStyle';

export enum ImageName {
  EMPTY_CARTON = 'empty-carton',
  EMPTY_MAILBOX = 'empty-mailbox',
  SAFETY_CONE = 'safety-cone',
}

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
          <Typography as="span" variant="subtitle1" color={Neutral.B18}>
            {title}
          </Typography>
        )}
        {description && (
          <Typography as="span" variant="body1" color={Neutral.B40}>
            {description}
          </Typography>
        )}
        {displayButtons && (
          <ButtonGroup>
            {showPrimaryButton && (
              <PrimaryButton>{buttonPrimaryContent}</PrimaryButton>
            )}
            {showBasicButton && <Button>{buttonBasicContent}</Button>}
          </ButtonGroup>
        )}
        {helpText && (
          <Typography as="span" variant="subtitle2" color={Neutral.B40}>
            {helpText}
          </Typography>
        )}
      </EmptyStateContentContainer>
    </EmptyStateContainer>
  );
};
