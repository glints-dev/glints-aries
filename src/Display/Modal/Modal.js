/* @flow */

import React, { Component } from 'react';

import Icon from '../../General/Icon';
import Divider from '../../General/Divider';

import { escEvent } from '../../Utils/DomUtils';

import {
  ModalContainer,
  ModalDialog,
  ModalContentArea,
  ModalHeader,
  ModalBodyWrapper,
  ModalBody,
} from '../../Style/Display/ModalStyle';

class Modal extends Component <Props, State> {
  state = {
    isOpen: false,
  }

  componentDidMount() {
    const { onClose } = this.props;
    document.addEventListener('keydown', escEvent(onClose), false);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.isVisible && !prevState.isOpen) {
      document.body.style.overflow = 'hidden';
      return { isOpen: true };
    }

    if (!nextProps.isVisible && prevState.isOpen) {
      document.body.removeAttribute('style');
      return { isOpen: false };
    }
    return null;
  }

  componentDidUpdate(prevProps) {
    const { isVisible } = this.props;
    if (!prevProps.isVisible && isVisible) {
      document.getElementById('modal-content').focus();
    }
  }

  componentWillUnmount() {
    const { onClose } = this.props;
    document.removeEventListener('keydown', escEvent(onClose), false);
    document.body.removeAttribute('style');
  }

  render() {
    const {
      onClose,
      type,
      children,
      className,
      hideContentArea,
      centering,
      removeAnimation,
      headerTitle,
      ...defaultProps
    } = this.props;

    const { isOpen } = this.state;

    return (
      <ModalContainer
        id="aries-modal"
        className={className}
        centering={centering}
        onClick={() => onClose()}
        isOpen={isOpen}
        removeAnimation={removeAnimation}
      >
        <ModalDialog id="modal-dialogarea">
          <ModalContentArea
            id="modal-content"
            role="dialog"
            aria-modal="true"
            hideContentArea={hideContentArea}
            centering={centering}
            onClick={e => e.stopPropagation()}
            tabIndex={0}
            isOpen={isOpen}
            removeAnimation={removeAnimation}
            {...defaultProps}
          >
            <ModalHeader>
              <h3>{headerTitle}</h3>
              <button type="button" onClick={() => onClose()}>
                <Icon name="close" color={hideContentArea ? 'white' : 'black'} />
              </button>
            </ModalHeader>
            {children}
          </ModalContentArea>
        </ModalDialog>
      </ModalContainer>
    );
  }
}

type Props = {
  children: React$Node,
  isVisible: boolean,
  type: string,
  onClose: Function,
  className: string,
  hideContentArea: boolean,
  centering: boolean,
  removeAnimation: boolean,
}

type State = {
  isOpen: boolean,
}

export default Modal;
