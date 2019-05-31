import * as React from 'react';

import classNames from 'classnames';

import Icon from '../Icon';

import {
  AlertContainer,
  AlertContent,
  AlertMessage,
  AlertIcon,
} from '../../Style/General/AlertStyle';

import { PrimaryColor, SecondaryColor } from '../../Style/Colors';

class Alert extends React.Component<Props, State> {
  alertContainerRef: React.RefObject<HTMLDivElement>;
  autoCloseTimeout: ReturnType<typeof setTimeout>;

  constructor(props: Props) {
    super(props);
    this.alertContainerRef = React.createRef();
    this.state = {
      isVisible: props.isOpen,
    };
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    if (nextProps.isOpen && !prevState.isVisible) {
      return { isVisible: true };
    }
    return null;
  }

  componentDidUpdate(prevProps: Props) {
    const { isOpen } = this.props;

    clearTimeout(this.autoCloseTimeout);

    if (prevProps.isOpen && !isOpen) {
      setTimeout(() => this.setState({ isVisible: false }), 300);
    } else if (isOpen && prevProps.autoClose) {
      this.autoCloseTimeout = setTimeout(() => {
        prevProps.onClose();
      }, prevProps.autoClose);
    }

    if (isOpen) {
      this.alertContainerRef.current.focus();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.autoCloseTimeout);
  }

  handleKeyDown = (onClose: () => void) => {
    const listener = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.keyCode === 13 || e.keyCode === 27) {
        onClose();
      }
    };

    return listener;
  }

  renderAlertTypeIcon() {
    const { type } = this.props;
    let alertType = null;
    let alertColor = null;

    switch (type) {
      case 'success':
        alertType = 'checkmark-solid';
        alertColor = SecondaryColor.darkgreen;
        break;
      case 'warning':
        alertType = 'warning-solid';
        alertColor = SecondaryColor.orange;
        break;
      case 'danger':
        alertType = 'warning-solid';
        alertColor = PrimaryColor.glintsred;
        break;
      case 'info':
        alertType = 'info-solid';
        alertColor = PrimaryColor.glintsblue;
        break;
      default:
        alertType = 'info-solid';
        alertColor = PrimaryColor.glintsblue;
        break;
    }

    return (
      <React.Fragment>
        <Icon name={alertType} color={alertColor} />
      </React.Fragment>
    );
  }

  renderMessage() {
    const { message } = this.props;

    return (
      <AlertMessage className="alert-message">
        {message}
      </AlertMessage>
    );
  }

  renderIcon() {
    const { onClose } = this.props;

    return (
      <AlertIcon
        className="alert-close"
        role="button"
        aria-label="Press Escape or Enter button to close alert"
        title="Close alert"
        onClick={onClose}
      >
        <Icon name="close" color={SecondaryColor.grey} />
      </AlertIcon>
    );
  }

  render() {
    const {
      type,
      isOpen,
      onClose,
      className,
    } = this.props;
    const { isVisible } = this.state;

    return isVisible
      ? (
        <AlertContainer
          className={classNames('aries-alert', className)}
          type={type}
          role="alertdialog"
          aria-hidden={isVisible ? 'false' : 'true'}
          aria-describedby="alert-message"
          isOpen={isOpen}
          isVisible={isVisible}
          tabIndex={0}
          onKeyDown={this.handleKeyDown(onClose)}
          ref={this.alertContainerRef}
        >
          {this.renderAlertTypeIcon()}
          <AlertContent className="alert-content">
            {this.renderMessage()}
            {this.renderIcon()}
          </AlertContent>
        </AlertContainer>
      )
      : null
  }
}

interface State {
  isVisible: boolean;
}

interface Props {
  type: string;
  message: string;
  onClose(): void;
  isOpen: boolean;
  className?: string;
  autoClose?: number;
}

export default Alert;
