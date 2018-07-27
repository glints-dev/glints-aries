/* @flow */
import React from 'react';
import { DropdownItem } from '../Style/DropdownStyle';

const DropdownItems = (props: Props) => {
  const {
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <DropdownItem className={className} {...defaultProps}>
      {children}
    </DropdownItem>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default DropdownItems;
