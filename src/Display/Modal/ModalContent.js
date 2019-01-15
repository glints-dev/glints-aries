/* @flow */

import React from 'react';
import { ModalContentStyle } from '../../Style/Display/ModalStyle';

const ModalContent = (props: Props) => {
  const {
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <ModalContentStyle className={className} {...defaultProps}>
      { children }
    </ModalContentStyle>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default ModalContent;
