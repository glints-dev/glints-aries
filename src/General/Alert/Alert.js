import React, { Component, Fragment } from 'react';

import Icon from '../Icon';

import {
  AlertContainer,
  AlertContent,
  AlertMessage,
  AlertIcon,
} from '../../Style/General/AlertStyle';

import { PrimaryColor, SecondaryColor } from '../../Style/Colors';

class Alert extends Component <State, Props> {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: props.isOpen,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.isOpen && !prevState.isVisible) {
      return { isVisible: true };
    }
    return null;
  }

  componentDidUpdate(prevProps) {
    const { isOpen } = this.props;

    clearTimeout(this.autoCloseTimeout);

    if (prevProps.isOpen && !isOpen) {
      setTimeout(() => this.setState({ isVisible: false }), 300);
    } else if (prevProps.autoClose) {
      this.autoCloseTimeout = setTimeout(() => {
        prevProps.onClose();
      }, prevProps.autoClose);
    }

    if (isOpen) {
      document.getElementById('aries-alert').focus();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.autoCloseTimeout);
  }

  handleKeyDown = (onClose) => {
    const listener = (e) => {
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
      <Fragment>
        <Icon name={alertType} color={alertColor} />
      </Fragment>
    );
  }

  renderMessage() {
    const { message } = this.props;

    return (
      <AlertMessage id="alert-message">
        {message}
      </AlertMessage>
    );
  }

  renderIcon() {
    const { onClose } = this.props;

    return (
      <AlertIcon
        id="alert-close"
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

    return (
      <If condition={isVisible}>
        <AlertContainer
          id="aries-alert"
          className={className}
          type={type}
          role="alertdialog"
          aria-hidden={isVisible ? 'false' : 'true'}
          aria-describedby="alert-message"
          isOpen={isOpen}
          isVisible={isVisible}
          tabIndex={0}
          onKeyDown={this.handleKeyDown(onClose)}
        >
          {this.renderAlertTypeIcon()}
          <AlertContent id="alert-content">
            {this.renderMessage()}
            {this.renderIcon()}
          </AlertContent>
        </AlertContainer>
      </If>
    );
  }
}

type State = {
  isVisible: boolean
}

type Props = {
  type: string,
  message: string,
  onClose: Function,
  isOpen: boolean,
}

export default Alert;
