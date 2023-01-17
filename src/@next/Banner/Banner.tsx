import React from 'react';
import { ButtonGroup } from '../ButtonGroup';
import { Icon } from '../Icon';
import { IconNames } from '../Icon/icons/icons';
import { Typography } from '../Typography';
import {
  StyledBanner,
  StyledBannerContentContainer,
  StyledBannerTitleContainer,
  StyledCloseIconWrapper,
} from './BannerStyle';

export type BannerProps = {
  title?: string;
  /** If set will take precedent of status */
  iconName?: IconNames;
  status?: 'success' | 'info' | 'warning' | 'critical';
  children?: React.ReactNode;
  action?: React.ReactNode;
  secondaryAction?: React.ReactNode;
  dismissable?: boolean;
  onDismiss?: () => void;
};

const iconNameStatusMap = {
  success: 'ri-checkbox-circle-fill',
  info: 'ri-information-fill',
  warning: 'ri-error-warning-fill',
  critical: 'ri-error-warning-fill',
};

export const Banner = ({
  title,
  status,
  iconName,
  children,
  action,
  secondaryAction,
  dismissable = true,
  onDismiss,
  ...props
}: BannerProps) => {
  const iconByStatus = iconNameStatusMap[status];
  if (!iconByStatus) {
    console.warn(`Status ${status} is not valid, default style will be used`);
  }
  const iconNameValue = iconName
    ? iconName
    : iconByStatus || iconNameStatusMap['info'];

  return (
    <div>
      <StyledBanner data-titled={!!title} data-status={status} {...props}>
        <StyledBannerTitleContainer>
          <Icon name={iconNameValue as IconNames} />
          <StyledBannerContentContainer>
            <Typography as="span" variant="subtitle1">
              {title}
            </Typography>
          </StyledBannerContentContainer>
          {dismissable && (
            <StyledCloseIconWrapper onClick={() => onDismiss?.()}>
              <Icon name="ri-close" />
            </StyledCloseIconWrapper>
          )}
        </StyledBannerTitleContainer>
        <StyledBannerContentContainer>
          <Typography as="div" variant="body1">
            {children}
          </Typography>
        </StyledBannerContentContainer>
        <StyledBannerContentContainer>
          {action ||
            (secondaryAction && (
              <ButtonGroup>
                {action}
                {secondaryAction}
              </ButtonGroup>
            ))}
        </StyledBannerContentContainer>
      </StyledBanner>
    </div>
  );
};
