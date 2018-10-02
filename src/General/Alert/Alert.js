import React, { Component } from 'react';

import Icon from '../Icon';
import {
  AlertContainer,
  AlertMessage,
  AlertIcon,
} from '../../Style/General/AlertStyle';

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
    if (prevProps.isOpen && !isOpen) {
      setTimeout(() => this.setState({ isVisible: false }), 300);
    }
  }

  renderMessage() {
    const { message } = this.props;

    return (
      <AlertMessage>
        {message}
      </AlertMessage>
    );
  }

  renderIcon() {
    const { onClose } = this.props;

    return (
      <AlertIcon onClick={onClose}>
        <Icon name="close" color="black" />
      </AlertIcon>
    );
  }

  render() {
    const { isOpen } = this.props;
    const { isVisible } = this.state;

    return (
      <If condition={isVisible}>
        <AlertContainer isOpen={isOpen} isVisible={isVisible}>
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
