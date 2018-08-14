/* @flow */

import React, { Fragment } from 'react';

import { OmniSearchItem } from '../Style/OmniSearchStyle';

const OmniSearchItems = (props: Props) => {
  const {
    children,
    className,
    onClick,
    ...defaultProps
  } = props;

  return (
    <Fragment>
      <OmniSearchItem className={className} onMouseDown={onClick} {...defaultProps}>
        {children}
      </OmniSearchItem>
    </Fragment>
  );
};

type Props = {
  children: React$Node,
  onClick: Function,
  className: string,
};

export default OmniSearchItems;
