/* @flow */

import React from 'react';
import { ModalBodyWrapper } from '../../Style/Display/ModalStyle';

const ModalBody = (props: Props) => {
  const {
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <ModalBodyWrapper className={className} {...defaultProps}>
      { children }
    </ModalBodyWrapper>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default ModalBody;
