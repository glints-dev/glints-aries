/* @flow */

import React from 'react';
import { BreadcrumbItemWrapper } from '../../Style/Navigation/BreadcrumbStyle';

const BreadcrumbItem = (props: Props) => {
  const {
    active,
    className,
    children,
    ...defaultProps
  } = props;

  return (
    <BreadcrumbItemWrapper
      className={className}
      active={active}
      {...defaultProps}
    >
      {children}
      <span>/</span>
    </BreadcrumbItemWrapper>
  );
};

type Props = {
  children: React$Node,
  active: boolean,
  className: string,
}

export default BreadcrumbItem;
