import React, { Component } from 'react';

import Icon from '../Icon';
import {
  AlertContainer,
  AlertMessage,
  AlertIcon,
} from '../../Style/General/AlertStyle';

let autoCloseTimeout = null;
class Alert extends Component <State, Props> {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: props.isOpen,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.isOpen && !prevState.isVisible) {
      if (nextProps.autoClose) {
        setTimeout(() => {
          nextProps.onClose();
          clearTimeout(autoCloseTimeout);
        }, nextProps.autoClose);
      }
      return { isVisible: true };
    }
    return null;
  }

  componentDidUpdate(prevProps) {
    const { autoClose, isOpen } = this.props;
    if (prevProps.isOpen && !isOpen) {
      setTimeout(() => this.setState({ isVisible: false }), 300);
    }

    if (isOpen) {
      document.getElementsByClassName('aries-alert')[0].focus();
    }
  }

  handleKeyDown = (onClose) => {
    const listener = (e) => {
      if (e.keyCode === 13 || e.keyCode === 27) {
        onClose();
      }
    };

    return listener;
  }

  renderMessage() {
    const { message } = this.props;

    return (
      <AlertMessage className="aries-alert-message">
        {message}
      </AlertMessage>
    );
  }

  renderIcon() {
    const { closeIconColor, onClose } = this.props;

    return (
      <AlertIcon
        role="button"
        aria-label="Press Enter or Escape button to close"
        onClick={onClose}
      >
        <Icon name="close" color={closeIconColor ? closeIconColor : '#000'} />
      </AlertIcon>
    );
  }

  render() {
    const { isOpen, onClose, style } = this.props;
    const { isVisible } = this.state;

    return (
      <If condition={isVisible}>
        <AlertContainer
          className="aries-alert"
          role="alertdialog"
          aria-hidden={isVisible ? 'false' : 'true'}
          aria-describedby="aries-alert-message"
          isOpen={isOpen}
          isVisible={isVisible}
          style={style ? style : null}
          tabIndex={0}
          onKeyDown={this.handleKeyDown(onClose)}
        >
          {this.renderMessage.bind(this)()}
          {this.renderIcon.bind(this)()}
        </AlertContainer>
      </If>
    );
  }
}

type State = {
  isVisible: boolean
}

type Props = {
  message: string,
  onClose: Function,
  isOpen: boolean
}

export default Alert;
