/* @flow */

import React from 'react';
import { Item } from '../../Style/BreadcrumbStyle';

const BreadcrumbItem = (props: Props) => {
  const {
    className,
    children,
    ...defaultProps
  } = props;

  return (
    <Item className={className} {...defaultProps}>
      {children}
      <span>/</span>
    </Item>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default BreadcrumbItem;
