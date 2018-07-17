/* @flow */
import React from 'react';
import { DropdownItem } from './../Style/DropdownStyle';

const DropdownItems = (props: Props) => {
  const { 
    children,
    className
  } = props;

  return (
    <DropdownItem className={className}>
      {children}
    </DropdownItem>
  );
}

type Props = {
  children: React$Node,
  className: string,
}

export default DropdownItems;
