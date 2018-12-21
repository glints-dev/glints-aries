/* @flow */

import React, { Component, Fragment } from 'react';

import Icon from '../../General/Icon';

import { escEvent } from '../../Utils/DomUtils';

import {
  ModalContainer,
  ModalDialog,
  ModalHeader,
  ModalContentArea,
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
      document.getElementsByClassName('aries-modal-content')[0].focus();
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
      ...defaultProps
    } = this.props;

    const { isOpen } = this.state;

    return (
      <ModalContainer
        className={className}
        centering={centering}
        onClick={() => onClose()}
        isOpen={isOpen}
        removeAnimation={removeAnimation}
      >
        <ModalDialog>
          <ModalContentArea
            className="aries-modal-content"
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
}

type State = {
  isOpen: boolean,
}

export default Modal;
