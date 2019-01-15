/* @flow */

import React from 'react';
import { ModalFooterStyle } from '../../Style/Display/ModalStyle';

const ModalFooter = (props: Props) => {
  const {
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <ModalFooterStyle className={className} {...defaultProps}>
      { children }
    </ModalFooterStyle>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default ModalFooter;
