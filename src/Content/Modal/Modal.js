/* @flow */

import React, { Component, Fragment } from 'react';
import { escEvent } from '../../Utils/DomUtils';
import { Container, ModalBackground, ModalArea } from '../../Style/ModalStyle';

class Modal extends Component <Props> {
  componentDidMount() {
    const { closeWithESC } = this.props;
    document.addEventListener('keydown', escEvent(closeWithESC), false);
  }

  componentWillUnmount() {
    const { closeWithESC } = this.props;
    document.removeEventListener('keydown', escEvent(closeWithESC), false);
  }

  render() {
    const {
      visibility,
      close,
      closeWithESC,
      type,
      children,
      className,
      hideContentArea,
      ...defaultProps
    } = this.props;

    return (
      <Fragment>
        {visibility && (
          <Container {...defaultProps} className={className}>
            <ModalBackground onClick={close} className="modalBackground" />
            <ModalArea className="modalArea" type={type} hideContentArea={hideContentArea}>
              {children}
            </ModalArea>
          </Container>
        )}
      </Fragment>
    );
  }
}

type Props = {
  children: React$Node,
  visibility: boolean,
  type: string,
  close: Function,
  className: string,
  hideContentArea: boolean,
  closeWithESC: Function,
}

export default Modal;
