/* @flow */
import React from 'react';
import { DropdownItem } from './../Style/DropdownStyle';

const DropdownItems = (props: Props) => {
  const { children } = props;

  return (
    <DropdownItem>{children}</DropdownItem>
  );
}

type Props = {
  children: React$Node,
}

export default DropdownItems;
