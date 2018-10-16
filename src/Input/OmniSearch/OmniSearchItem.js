/* @flow */

import React, { Fragment } from 'react';

import { OmniSearchItemWrapper } from '../../Style/Input/OmniSearchStyle';

const OmniSearchItem = (props: Props) => {
  const {
    children,
    className,
    onClick,
    ...defaultProps
  } = props;

  return (
    <Fragment>
      <OmniSearchItemWrapper
        className={className}
        onMouseDown={onClick}
        role="listitem"
        {...defaultProps}
      >
        {children}
      </OmniSearchItemWrapper>
    </Fragment>
  );
};

type Props = {
  children: React$Node,
  onClick: Function,
  className: string,
};

export default OmniSearchItem;
