/* @flow */

import React, { Component, Fragment } from 'react';
import { Container, ModalBackground, ModalArea } from '../Style/ModalStyle';

class Modal extends Component <Props> {
  render() {
    const {
      visibility,
      close,
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
}

export default Modal;
