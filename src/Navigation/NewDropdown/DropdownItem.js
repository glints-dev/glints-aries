/* @flow */

import React from 'react';

import { DropdownItemWrapper } from '../../Style/Navigation/NewDropdownStyle';

const DropdownItem = (props: Props) => {
  const {
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <DropdownItemWrapper className={className} {...defaultProps}>
      {children}
    </DropdownItemWrapper>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default DropdownItem;
