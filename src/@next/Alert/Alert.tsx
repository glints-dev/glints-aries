import React, { useEffect } from 'react';
import { Icon } from '../Icon';
import { IconNames } from '../Icon/icons/icons';
import { Typography } from '../Typography';
import {
  StyledAlertContainer,
  StyledAlertContentColumn,
  StyledAlertCloseIconContainer,
} from './AlertStyle';

export type AlertProps = {
  title?: string;
  status?: 'success' | 'info' | 'warning' | 'error';
  content?: React.ReactNode;
  children?: React.ReactNode;
  show?: boolean;
  /** Duration of alert in miliseconds */
  duration?: number;
  onDismissed?: () => void;
};

const iconNameStatusMap: Record<AlertProps['status'], IconNames> = {
  success: 'ri-checkbox-circle-fill',
  info: 'ri-information-fill',
  warning: 'ri-error-warning-fill',
  error: 'ri-error-warning-fill',
};

export const Alert = ({
  show,
  title,
  content,
  status,
  duration = 4000,
  children,
  onDismissed,
}: AlertProps) => {
  useEffect(() => {
    if (!show) {
      return;
    }
    const timeId = setTimeout(() => {
      // onDismissed?.();
    }, duration);

    return () => {
      clearTimeout(timeId);
    };
  }, [duration, onDismissed, show]);

  const hasTitle = !!title;
  const iconStatus = iconNameStatusMap[status];
  if (status && !iconStatus) {
    console.warn(
      `Status "${status}" is not a valid Alert status, "info" will be used instead`
    );
  }
  const iconName = iconStatus || iconNameStatusMap['info'];

  if (!show) {
    return null;
  }

  return (
    <StyledAlertContainer data-titled={hasTitle} data-status={status || 'info'}>
      <div>
        <Icon name={iconName} />
      </div>
      <div>
        {hasTitle && (
          <StyledAlertContentColumn>
            <Typography as="div" variant="subtitle1">
              {title}
            </Typography>
          </StyledAlertContentColumn>
        )}
        <div>
          <StyledAlertContentColumn>
            <Typography as="div" variant="body1">
              {content}
            </Typography>
          </StyledAlertContentColumn>
        </div>
        <div>
          <StyledAlertContentColumn>
            <Typography as="div" variant="body1">
              {children}
            </Typography>
          </StyledAlertContentColumn>
        </div>
      </div>
      <StyledAlertCloseIconContainer onClick={() => onDismissed?.()}>
        <Icon name="ri-close" />
      </StyledAlertCloseIconContainer>
    </StyledAlertContainer>
  );
};
