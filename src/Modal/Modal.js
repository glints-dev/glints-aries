/* @flow */

import React from 'react';
import { Container, ModalBackground, ModalArea } from '../Style/ModalStyle';

const Modal = (props: Props) => {
  const {
    visibility,
    close,
    type,
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <Container {...defaultProps} visibility={visibility} className={className}>
      <ModalBackground onClick={close} className="modalBackground" />
      <ModalArea className="modalArea" type={type}>
        {children}
      </ModalArea>
    </Container>
  );
};

type Props = {
  children: React$Node,
  visibility: boolean,
  type: string,
  close: Function,
  className: string,
}

export default Modal;
