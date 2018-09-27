/* @flow */

import React, { Fragment } from 'react';

import { Item } from '../../Style/SelectStyle';

const SelectItems = (props: Props) => {
  const {
    children,
    className,
    onClick,
    ...defaultProps
  } = props;

  return (
    <Fragment>
      <Item className={className} onMouseDown={onClick} {...defaultProps}>
        {children}
      </Item>
    </Fragment>
  );
};

type Props = {
  children: React$Node,
  onClick: Function,
  className: string,
};

export default SelectItems;
