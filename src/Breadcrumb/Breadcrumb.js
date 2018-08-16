/* @flow */

import React from 'react';
import { Container } from '../Style/BreadcrumbStyle';

const Breadcrumb = (props: Props) => {
  const {
    className,
    children,
    ...defaultProps
  } = props;

  return (
    <Container className={className} {...defaultProps}>
      {children}
    </Container>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default Breadcrumb;
