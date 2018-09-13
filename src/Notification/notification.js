import React, { Component } from 'react';

import Icon from '../Icon/Icon';
import {
  NotificationContainer,
  NotificationMessage,
  NotificationIcon,
} from '../Style/NotificationStyle';

class CloseableNotification extends Component <State, Props> {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: props.isOpen,
    };
  }

  componentDidUpdate(prevProps) {
    const { isOpen } = this.props;
    const { isVisible } = this.state;
    if (prevProps.isOpen && !isOpen) {
      setTimeout(() => this.setState({ isVisible: false }), 300); //eslint-disable-line
    } else if (isOpen !== isVisible) {
      this.setState({ isVisible: isOpen }); //eslint-disable-line
    }
  }

  renderMessage() {
    const { message } = this.props;
    return (
      <NotificationMessage>
        {message}
      </NotificationMessage>
    );
  }

  renderIcon() {
    const { onClose } = this.props;
    return (
      <NotificationIcon onClick={onClose}>
        <Icon name="close" color="black" size={13} />
      </NotificationIcon>
    );
  }

  render() {
    const { isOpen } = this.props;
    const { isVisible } = this.state;
    return (
      <If condition={isVisible}>
        <NotificationContainer isOpen={isOpen} isVisible={isVisible}>
          {this.renderMessage.bind(this)()}
          {this.renderIcon.bind(this)()}
        </NotificationContainer>
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

export default CloseableNotification;
