/* @flow */

import React from 'react';
import { Item } from '../../Style/BreadcrumbStyle';

const BreadcrumbItem = (props: Props) => {
  const {
    active,
    className,
    children,
    ...defaultProps
  } = props;

  return (
    <Item className={className} active={active} {...defaultProps}>
      {children}
      <span>/</span>
    </Item>
  );
};

type Props = {
  children: React$Node,
  active: boolean,
  className: string,
}

export default BreadcrumbItem;
