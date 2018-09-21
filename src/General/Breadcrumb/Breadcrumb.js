/* @flow */

import React from 'react';
import { Container } from '../../Style/BreadcrumbStyle';

const Breadcrumb = (props: Props) => {
  const {
    bgColor,
    className,
    children,
    marginBottom,
    ...defaultProps
  } = props;

  return (
    <Container
      className={className}
      marginBottom={marginBottom}
      bgColor={bgColor}
      {...defaultProps}
    >
      {children}
    </Container>
  );
};

type Props = {
  bgColor: string,
  children: React$Node,
  className: string,
  marginBottom: string,
}

export default Breadcrumb;
