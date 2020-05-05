import * as React from 'react';

import classNames from 'classnames';

import {
  CheckmarkSolidIcon,
  WarningSolidIcon,
  InfoSolidIcon,
  CloseIcon,
} from '../Icon/components';
import {
  AlertContainer,
  AlertContent,
  AlertMessage,
  AlertIcon,
} from '../../Style/General/AlertStyle';

import { PrimaryColor, SecondaryColor } from '../../Style/Colors';

const Alert = ({
  isOpen,
  autoClose,
  onClose,
  type,
  className,
  message,
}: Props) => {
  const alertContainerRef = React.useRef<HTMLDivElement>();
  const autoCloseTimeout = React.useRef<ReturnType<typeof setTimeout>>();
  const prevIsOpen = React.useRef(isOpen);
  const [isVisible, setIsVisible] = React.useState<boolean>(isOpen);

  React.useEffect(() => {
    if (isOpen && !isVisible) setIsVisible(true);
  }, [isOpen, isVisible, setIsVisible]);

  React.useEffect(() => {
    clearTimeout(autoCloseTimeout.current);
    if (prevIsOpen.current && !isOpen) {
      setTimeout(() => setIsVisible(false), 300);
    } else if (isOpen && autoClose) {
      autoCloseTimeout.current = setTimeout(() => {
        onClose();
      }, autoClose);
    }

    if (isOpen) {
      alertContainerRef.current.focus();
    }
  }, [isOpen, setIsVisible, autoClose, onClose]);

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

  const renderAlertTypeIcon = React.useCallback(() => {
    let AlertTypeIcon = null;
    let alertColor = null;

    switch (type) {
      case 'success':
        AlertTypeIcon = CheckmarkSolidIcon;
        alertColor = SecondaryColor.darkgreen;
        break;
      case 'warning':
        AlertTypeIcon = WarningSolidIcon;
        alertColor = SecondaryColor.orange;
        break;
      case 'danger':
        AlertTypeIcon = WarningSolidIcon;
        alertColor = PrimaryColor.glintsred;
        break;
      case 'info':
        AlertTypeIcon = InfoSolidIcon;
        alertColor = PrimaryColor.glintsblue;
        break;
      default:
        AlertTypeIcon = InfoSolidIcon;
        alertColor = PrimaryColor.glintsblue;
        break;
    }

    return (
      <React.Fragment>
        <AlertTypeIcon color={alertColor} />
      </React.Fragment>
    );
  }, [type]);

  return isVisible ? (
    <AlertContainer
      className={classNames('aries-alert', className)}
      type={type}
      role="alertdialog"
      aria-hidden={isVisible ? 'false' : 'true'}
      aria-describedby="alert-message"
      isOpen={isOpen}
      isVisible={isVisible}
      tabIndex={0}
      onKeyDown={handleKeyDown(onClose)}
      ref={alertContainerRef}
    >
      {renderAlertTypeIcon()}
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

interface Props {
  type: string;
  message: React.ReactNode;
  onClose(): void;
  isOpen: boolean;
  className?: string;
  autoClose?: number;
}

export default Alert;
