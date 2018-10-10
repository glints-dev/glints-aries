import React from 'react';

import { LayoutBodyWrapper } from '../../Style/Layout/LayoutStyle';

const LayoutBody = (props: Props) => {
  const {
    className,
    children,
    ...defaultProps
  } = props;

  return (
    <LayoutBodyWrapper className={className} {...defaultProps}>
      {children}
    </LayoutBodyWrapper>
  );
};

type Props = {
    children: React$Node,
}

export default LayoutBody;
