import React from 'react';

import { LayoutFooterWrapper } from '../../Style/Layout/LayoutStyle';

const LayoutFooter = (props: Props) => {
  const {
    className,
    children,
    ...defaultProps
  } = props;

  return (
    <LayoutFooterWrapper className={className} {...defaultProps}>
      {children}
    </LayoutFooterWrapper>
  );
};

type Props = {
    children: React$Node,
}

export default LayoutFooter;
