/* @flow */

import React, { Component, Fragment } from 'react';

import { escEvent } from '../../Utils/DomUtils';

import { ModalContainer, ModalContentArea } from '../../Style/Display/ModalStyle';

class Modal extends Component <Props, State> {
  state = {
    isOpen: false,
  }

  componentDidMount() {
    const { onCloseWithESC } = this.props;
    document.addEventListener('keydown', escEvent(onCloseWithESC), false);
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
    const { onCloseWithESC } = this.props;
    document.removeEventListener('keydown', escEvent(onCloseWithESC), false);
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
            <ModalContentArea
              className="aries-modal-content"
              role="dialog"
              aria-modal="true"
              hideContentArea={hideContentArea}
              onClick={e => e.stopPropagation()}
              tabIndex={0}
              {...defaultProps}
            >
              {children}
            </ModalContentArea>
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
  onCloseWithESC: Function,
  className: string,
  hideContentArea: boolean,
}

type State = {
  isOpen: boolean,
}

export default Modal;
