import * as React from 'react';

import classNames from 'classnames';
import isUndefined from 'lodash/isUndefined';

import {
  CheckmarkSolidIcon,
  WarningCircleSolidIcon,
  InfoSolidIcon,
  CloseIcon,
} from '../Icon/components';
import {
  AlertClose,
  AlertContainer,
  AlertIcon,
  AlertMessage,
} from './AlertStyle';

import { Greyscale, PrimaryColor, SecondaryColor } from '../../Utils/Colors';
import { DelayedUnmount } from '../../Utils/DelayedUnmount';

export const Alert = ({
  isOpen: externalIsVisible,
  autoClose,
  onClose: externalOnClose,
  type = 'info',
  className,
  message,
}: Props) => {
  const [internalIsVisible, setInternalIsVisible] = React.useState<boolean>(
    true
  );

  const isVisible = isUndefined(externalIsVisible)
    ? internalIsVisible
    : externalIsVisible;

  const internalOnClose = () => setInternalIsVisible(false);
  const onClose = isUndefined(externalOnClose)
    ? internalOnClose
    : externalOnClose;

  React.useEffect(() => {
    if (isVisible && autoClose) {
      const timeout = setTimeout(onClose, autoClose);
      return () => clearTimeout(timeout);
    }
  }, [isVisible, autoClose, onClose]);

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

  return (
    // The delay is set to 290ms because the fade-out animation takes 300ms.
    // Setting them to the same value creates a visual glitch.
    <DelayedUnmount mount={isVisible} delay={290}>
      <AlertContainer
        className={classNames('aries-alert', className)}
        data-type={type}
        role="alertdialog"
        aria-hidden={!isVisible}
        data-open={isVisible}
        aria-describedby="alert-message"
        tabIndex={0}
        onKeyDown={handleKeyDown(onClose)}
        ref={node => node && node.focus()}
      >
        <AlertIcon>
          <AlertTypeIcon color={alertColor} />
        </AlertIcon>
        <AlertMessage className="alert-message">{message}</AlertMessage>
        <AlertClose
          className="alert-close"
          role="button"
          aria-label="Press Escape or Enter button to close alert"
          title="Close alert"
          onClick={onClose}
        >
          <CloseIcon color={Greyscale.devilsgrey} />
        </AlertClose>
      </AlertContainer>
    </DelayedUnmount>
  );
};

export type AlertType = 'success' | 'warning' | 'danger' | 'info';

export interface Props {
  /** Set Alert's style. */
  type?: AlertType;
  /** Set message for Alert. */
  message: string;
  /** A function to close Alert. onClose will be triggered if the close icon is clicked or the Alert has ran its autoClose duration or ESC/Enter is pressed */
  onClose(): void;
  /** Set Alert to show. */
  isOpen?: boolean;
  /** Set classname for Alert. */
  className?: string;
  /** Set period for Alert to close by itself. The value is in millisecond. */
  autoClose?: number;
}

export default Alert;
