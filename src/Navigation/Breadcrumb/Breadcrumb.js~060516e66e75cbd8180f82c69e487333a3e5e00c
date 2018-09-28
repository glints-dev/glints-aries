/* @flow */

import React from 'react';
import { BreadcrumbContainer } from '../../Style/BreadcrumbStyle';

const Breadcrumb = (props: Props) => {
  const {
    className,
    children,
    ...defaultProps
  } = props;

  return (
    <BreadcrumbContainer className={className} {...defaultProps}>
      {children}
    </BreadcrumbContainer>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default Breadcrumb;
