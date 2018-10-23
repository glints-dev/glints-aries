import React, { Component, Fragment } from 'react';

import Icon from '../../General/Icon';

import { escEvent } from '../../Utils/DomUtils';

import {
  ToastContainer,
  ToastTopWrapper,
  ToastIcon,
  ToastBodyWrapper,
} from '../../Style/Display/ToastStyle';

class Toast extends Component <Props> {

  componentDidMount() {
    const { onClose } = this.props;

    document.addEventListener('keydown', escEvent(onClose), false);
  }

  componentWillUnmount() {
    const { onClose } = this.props;

    document.removeEventListener('keydown', escEvent(onClose), false);
  }

  render() {
    const {
      children,
      isVisible,
      onClose,
      theme,
    } = this.props;

    return (
      <Fragment>
        {isVisible && (
          <ToastContainer theme={theme}>
            <ToastTopWrapper>
              <ToastIcon onClick={onClose}>
                <Icon name="close" color={theme === 'black' ? 'white' : 'black'} />
              </ToastIcon>
            </ToastTopWrapper>
            <ToastBodyWrapper>
              { children }
            </ToastBodyWrapper>
          </ToastContainer>
        )}
      </Fragment>
    );
  }
}

type Props = {
  children: React$Node,
  isVisible: boolean,
  onClose: Function,
  theme: string,
}

export default Toast;
