/* @flow */

import React from 'react';

import { DropdownItemWrapper } from '../../Style/Navigation/NewDropdownStyle';

const DropdownItem = (props: Props) => {
  const {
    children,
    className,
    itemOnClick,
    ...defaultProps
  } = props;

  return (
    <DropdownItemWrapper className={className} onMouseDown={itemOnClick} {...defaultProps}>
      {children}
    </DropdownItemWrapper>
  );
};

type Props = {
  children: React$Node,
  className: string,
  onClick: Function
}

export default DropdownItem;
