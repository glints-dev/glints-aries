import React from 'react';

import { LayoutHeaderWrapper } from '../../Style/Layout/LayoutStyle';

const LayoutHeader = (props: Props) => {
  const {
    className,
    children,
    ...defaultProps
  } = props;

  return (
    <LayoutHeaderWrapper {...defaultProps}>
      {children}
    </LayoutHeaderWrapper>
  );
};

type Props = {
    children: React$Node,
}

export default LayoutHeader;
