import React from 'react';
import { ButtonGroup } from '../ButtonGroup';
import { Icon } from '../Icon';
import { IconNames } from '../Icon/icons/icons';
import { Typography } from '../Typography';
import {
  StyledBanner,
  StyledBannerContentContainer,
  StyledBannerTitle,
  StyledBannerTitleContainer,
  StyledCloseIconWrapper,
} from './BannerStyle';
import {
  StyledFixedBanner,
  StyledFixedIconWrapper,
  StyledFixedBannerContentContainer,
  StyledFixedBannerButtonContainer,
  StyledFixedCloseIconWrapper,
} from './FixedBannerStyle';

export interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  /** If set will take precedent of status */
  iconName?: IconNames;
  status?: 'success' | 'info' | 'warning' | 'critical';
  children?: React.ReactNode;
  action?: React.ReactNode;
  secondaryAction?: React.ReactNode;
  dismissable?: boolean;
  onDismiss?: () => void;
  type?: 'static' | 'fixed';
  showIcon?: boolean;
}

const iconNameStatusMap: Record<BannerProps['status'], IconNames> = {
  success: 'ri-checkbox-circle-fill',
  info: 'ri-information-fill',
  warning: 'ri-error-warning-fill',
  critical: 'ri-error-warning-fill',
};

export const Banner = React.forwardRef<HTMLDivElement, BannerProps>(
  function Banner(
    {
      title,
      status,
      iconName,
      children,
      action,
      secondaryAction,
      dismissable = true,
      onDismiss,
      type = 'static',
      showIcon = true,
      ...props
    }: BannerProps,
    ref
  ) {
    const iconByStatus = iconNameStatusMap[status];
    if (!iconByStatus) {
      console.warn(`Status ${status} is not valid, default style will be used`);
    }
    const iconNameValue = iconName
      ? iconName
      : iconByStatus || iconNameStatusMap['info'];

    if (type === 'static')
      return (
        <StyledBanner
          ref={ref}
          data-titled={!!title}
          data-status={status}
          {...props}
        >
          <StyledBannerTitleContainer>
            <Icon name={iconNameValue} />
            {title && (
              <StyledBannerTitle>
                <Typography as="span" variant="subtitle1">
                  {title}
                </Typography>
              </StyledBannerTitle>
            )}
            {dismissable && (
              <StyledCloseIconWrapper
                role="button"
                onClick={() => onDismiss?.()}
              >
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
            {action &&
              (secondaryAction !== 'undefined' ? (
                <ButtonGroup>
                  {action}
                  {secondaryAction}
                </ButtonGroup>
              ) : (
                { action }
              ))}
          </StyledBannerContentContainer>
        </StyledBanner>
      );
    return (
      <StyledFixedBanner
        ref={ref}
        data-status={status}
        data-nobutton={action ? '' : 'true'}
        {...props}
      >
        {showIcon && (
          <StyledFixedIconWrapper data-status={status}>
            <Icon name={iconNameValue} />
          </StyledFixedIconWrapper>
        )}
        <StyledFixedBannerContentContainer data-noicon={showIcon ? '' : 'true'}>
          <Typography as="div" variant="body1">
            {children}
          </Typography>
        </StyledFixedBannerContentContainer>
        <StyledFixedBannerButtonContainer data-noicon={showIcon ? '' : 'true'}>
          {action &&
            (secondaryAction !== 'undefined' ? (
              <ButtonGroup>
                {action}
                {secondaryAction}
              </ButtonGroup>
            ) : (
              { action }
            ))}
        </StyledFixedBannerButtonContainer>
        {dismissable && (
          <StyledFixedCloseIconWrapper
            role="button"
            onClick={() => onDismiss?.()}
          >
            <Icon name="ri-close" />
          </StyledFixedCloseIconWrapper>
        )}
      </StyledFixedBanner>
    );
  }
);
