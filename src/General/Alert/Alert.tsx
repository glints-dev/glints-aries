import * as React from 'react';

import classNames from 'classnames';

import {
  CheckmarkSolidIcon,
  WarningCircleSolidIcon,
  InfoSolidIcon,
  CloseIcon,
} from '../Icon/components';
import {
  AlertContainer,
  AlertContent,
  AlertMessage,
  AlertIcon,
  AlertTypeIconContainer,
} from './AlertStyle';

import { PrimaryColor, SecondaryColor } from '../../Utils/Colors';

export const Alert = ({
  isOpen,
  autoClose,
  onClose,
  type = 'info',
  className,
  message,
}: Props) => {
  const alertContainerRef = React.useRef<HTMLDivElement>();
  const autoCloseTimeout = React.useRef<ReturnType<typeof setTimeout>>();
  const [isVisible, setIsVisible] = React.useState<boolean>(isOpen);

  React.useEffect(() => {
    if (isOpen && !isVisible) {
      setIsVisible(true);
    }
    if (!isOpen && isVisible) {
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [isOpen, isVisible, setIsVisible]);

  // focus alert element for keydown event
  React.useEffect(() => {
    if (isVisible && alertContainerRef.current) {
      alertContainerRef.current.focus();
    }
  }, [isVisible]);

  React.useEffect(() => {
    if (autoCloseTimeout.current) {
      clearTimeout(autoCloseTimeout.current);
    }

    if (isOpen && autoClose) {
      autoCloseTimeout.current = setTimeout(() => {
        onClose();
      }, autoClose);
    }
  }, [isOpen, isVisible, setIsVisible, autoClose, onClose]);

  React.useEffect(() => {
    return () => clearTimeout(autoCloseTimeout.current);
  }, []);

  const handleKeyDown = React.useCallback((onClose: () => void) => {
    const listener = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.keyCode === 13 || e.keyCode === 27) {
        onClose();
      }
    };

    return listener;
  }, []);

  const { AlertTypeIcon, alertColor } = React.useMemo(() => {
    switch (type) {
      case 'success':
        return {
          AlertTypeIcon: CheckmarkSolidIcon,
          alertColor: SecondaryColor.darkgreen,
        };
      case 'warning':
        return {
          AlertTypeIcon: WarningCircleSolidIcon,
          alertColor: SecondaryColor.orange,
        };
      case 'danger':
        return {
          AlertTypeIcon: WarningCircleSolidIcon,
          alertColor: PrimaryColor.glintsred,
        };
      case 'info':
      default:
        return {
          AlertTypeIcon: InfoSolidIcon,
          alertColor: SecondaryColor.actionblue,
        };
    }
  }, [type]);

  return isVisible ? (
    <AlertContainer
      className={classNames('aries-alert', className)}
      type={type}
      role="alertdialog"
      aria-hidden={isVisible ? 'false' : 'true'}
      aria-describedby="alert-message"
      isOpen={isOpen}
      isVisible={isVisible && isOpen}
      tabIndex={0}
      onKeyDown={handleKeyDown(onClose)}
      ref={alertContainerRef}
    >
      <AlertTypeIconContainer>
        <AlertTypeIcon color={alertColor} />
      </AlertTypeIconContainer>
      <AlertContent className="alert-content">
        <AlertMessage className="alert-message">{message}</AlertMessage>
        <AlertIcon
          className="alert-close"
          role="button"
          aria-label="Press Escape or Enter button to close alert"
          title="Close alert"
          onClick={onClose}
        >
          <CloseIcon color={SecondaryColor.grey} />
        </AlertIcon>
      </AlertContent>
    </AlertContainer>
  ) : null;
};

export type AlertType = 'success' | 'warning' | 'danger' | 'info';

export interface Props {
  /** Set Alert's style. */
  type: AlertType;
  /** Set message for Alert. */
  message: string;
  /** A function to close Alert. */
  onClose(): void;
  /** Set Alert to show. */
  isOpen: boolean;
  /** Set classname for Alert. */
  className?: string;
  /** Set period for Alert to close by itself. The value is in millisecond. */
  autoClose?: number;
}

export default Alert;
