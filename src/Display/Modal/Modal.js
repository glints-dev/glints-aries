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
  }

  render() {
    const {
      onClose,
      type,
      children,
      className,
      hideContentArea,
      ...defaultProps
    } = this.props;

    const { isOpen } = this.state;

    return (
      <Fragment>
        {isOpen && (
          <ModalContainer
            className={className}
            onClick={() => onClose()}
          >
            <ModalDialog>
              <ModalContentArea
                className="aries-modal-content"
                role="dialog"
                aria-modal="true"
                hideContentArea={hideContentArea}
                onClick={e => e.stopPropagation()}
                tabIndex={0}
                {...defaultProps}
              >
                <ModalHeader>
                  <button type="button" onClick={() => onClose()}>
                    <Icon name="close" color="black" />
                  </button>
                </ModalHeader>
                {children}
              </ModalContentArea>
            </ModalDialog>
          </ModalContainer>
        )}
      </Fragment>
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
}

type State = {
  isOpen: boolean,
}

export default Modal;
