/* @flow */

import React, { Component, Fragment } from 'react';

import { escEvent } from '../../Utils/DomUtils';

import { ModalContainer, ModalBackground, ModalContentArea } from '../../Style/Display/ModalStyle';

class Modal extends Component <Props> {
  componentDidMount() {
    const { onCloseWithESC } = this.props;
    document.addEventListener('keydown', escEvent(onCloseWithESC), false);
  }

  componentWillUnmount() {
    const { onCloseWithESC } = this.props;
    document.removeEventListener('keydown', escEvent(onCloseWithESC), false);
  }

  render() {
    const {
      isVisible,
      onClose,
      type,
      children,
      className,
      hideContentArea,
      ...defaultProps
    } = this.props;

    return (
      <Fragment>
        {isVisible && (
          <ModalContainer className={className} {...defaultProps}>
            <ModalBackground onClick={onClose} className="modal-background" />
            <ModalContentArea className="modal-area" type={type} hideContentArea={hideContentArea}>
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

export default Modal;
